import React, { FC, memo } from "react";

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
  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <PrimaryButton className="bg-inherit text-cusBlack border-[1px] border-cusBlack">
          Tambah Sesi
        </PrimaryButton>
        <Searchbar />
      </MediumText>
      <ListSession sessions={sessions} />
    </ContainerMain>
  );
};

export default memo(SessionList);
