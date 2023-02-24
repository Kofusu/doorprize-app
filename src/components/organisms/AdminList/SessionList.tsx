import React, { ChangeEvent, FC, memo, useState } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Searchbar } from "@/components/molecules/Searchbar";
import UserList from "@/components/molecules/Lists/UserList";
import ListSession from "@/components/molecules/Lists/ListSession";
import { PrimaryButton } from "@/components/atoms/Buttons";

interface Props {
  sessions: any[]
}

const SessionList: FC<Props> = ({sessions}) => {
  const [list, setList] = useState<any>(sessions);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setList(() =>
      sessions.filter((us: any) => us.nama_session.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <PrimaryButton className="bg-inherit text-cusBlack border-[1px] border-cusBlack">
          Tambah Sesi
        </PrimaryButton>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <ListSession sessions={list} />
    </ContainerMain>
  );
};

export default memo(SessionList);
