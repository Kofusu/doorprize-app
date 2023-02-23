import React, { FC } from "react";

import { Column, Row } from "@/components/atoms/Grid";
import ListTitle from "@/components/atoms/Titles/ListTitle";
import { ContentAksi, ContentList } from "../ContentList";

interface Props {
  users: any[];
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div className="mx-5 h-[465px] mt-8">
      <Column className="gap-y-0">
        <Row className="">
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-1">
            ID
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Email
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Nama Lengkap
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            No. HP
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Domisili
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Aksi
          </ListTitle>
        </Row>

        {users?.map((user: any) => (
          <Row key={user?.id_user}>
            <ContentList className="border-[1px] px-2 py-2 flex-1" text={user?.id_user} />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.email}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.nama_user}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.no_hp}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.no_hp}
            />
            <ContentAksi
              className="border-[1px] px-2 py-2 flex-[4]"
            >
              A
            </ContentAksi>
          </Row>
        ))}
      </Column>
    </div>
  );
};

export default UserList;
