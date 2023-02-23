import React, { FC, memo } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Searchbar } from "@/components/molecules/Searchbar";
import UserList from "@/components/molecules/Lists/UserList";

interface Props {
  users: any;
}

const BlacklistUserList: FC<Props> = ({ users }) => {
  
  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <Title className="text-2xl font-medium">Blacklist User</Title>
        <Searchbar />
      </MediumText>
      <UserList users={users} />
    </ContainerMain>
  );
};

export default memo(BlacklistUserList);
