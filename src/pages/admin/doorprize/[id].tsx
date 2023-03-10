import { useState } from "react";
import Head from "next/head";

import { NextPageWithLayout } from "@/utils/types";
import { AdminTemplate } from "@/components/templates/AdminTemplate";
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage";
import { Main } from "@/components/atoms/Main";
import { GetServerSideProps } from "next";
import { PrizeList } from "@/components/organisms/AdminList";
import sql from "@/utils/db";
import fs from "fs/promises";
import path from "path";

interface Props {
  prizes: any;
}

const DoorprizeDetailPage: NextPageWithLayout<Props> = ({
  prizes,
}) => {
  const [prizeList, setPrizeList] = useState<any>(prizes);

  return (
    <>
      <Head>
        <title>Doorprize</title>
        <meta name="description" content="Generated by Doorprize" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <TitleAdminPage title={`${prizes[0]?.nama_session}`} />
        <PrizeList prizes={prizeList} />
      </Main>
    </>
  );
};

DoorprizeDetailPage.getLayout = page => {
  return (
    <>
      <AdminTemplate>{page}</AdminTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  // const prizes = [
  //   {
  //     id_prize: 1,
  //     nama_prize: "Sepeda JBL 1",
  //     image_name: "sepedaJBL1.png",
  //   },
  //   {
  //     id_prize: 2,
  //     nama_prize: "Sepeda JBL 2",
  //     image_name: "sepedaJBL1.png",
  //   },
  //   {
  //     id_prize: 3,
  //     nama_prize: "Sepeda JBL 3",
  //     image_name: "sepedaJBL1.png",
  //   },
  // ];

  const { id } = context.query;

  const prizes =
    await sql(`SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, sessions.id_session, sessions.nama_session FROM sessions inner join prize on
  sessions.id_session=prize.id_session where prize.id_session=${id}`).then(
      async (res: any) => {
        if (res.length <= 0) {
          return await sql(
            `SELECT * FROM sessions where id_Session=${id}`,
          ).then((res: any) =>
            res.map((sess: any) => {
              return {
                id_session: sess?.id_session,
                nama_session: sess?.nama_session,
              };
            }),
          );
        }

        return res.map((prize: any) => {
          return {
            id_prize: prize?.id_prize,
            nama_prize: prize?.nama_prize,
            nama_gambar: prize?.nama_gambar,
            nama_session: prize?.nama_session,
            id_session: prize?.id_session,
          };
        });
      },
    );
  return {
    props: {
      prizes,
    },
  };
};

export default DoorprizeDetailPage;
