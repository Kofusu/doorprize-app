import React from "react";

import { Column, Row } from "@/components/atoms/Grid";
import ListTitle from "@/components/atoms/Titles/ListTitle";
import { ContentList } from "../ContentList";

const WinnerList = ({ winner }) => {
  return (
    <div className="mx-5 h-[320px] overflow-auto">
      <Column className="gap-y-3 relative">
        <Row className='sticky top-0'>
          <ListTitle className="flex-1">ID</ListTitle>
          <ListTitle className="flex-[4]">Nama Lengkap</ListTitle>
          <ListTitle className="flex-[4]">No. HP</ListTitle>
          <ListTitle className="flex-[4]">Nama PT</ListTitle>
          <ListTitle className="flex-[4]">Mendapatkan</ListTitle>
        </Row>

        {winner?.map((user) => (
          <Row key={user?.id_user} className='mt-2'>
            <ContentList className="flex-1 flex items-center" text={user?.id_user} />
            <ContentList className="flex-[4] flex items-center" text={user?.nama_user} />
            <ContentList className="flex-[4] flex items-center" text={user?.no_hp} />
            <ContentList className="flex-[4] flex items-center" text={user?.nama_pt} />
            <ContentList className="flex-[4] flex items-center" text={user?.nama_prize} />
          </Row>
        ))}
      </Column>
    </div>
  );
};

export default WinnerList;
