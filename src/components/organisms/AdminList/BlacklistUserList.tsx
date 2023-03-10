import React, { ChangeEvent, FC, memo, useState } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Searchbar } from "@/components/molecules/Searchbar";
import UserList from "@/components/molecules/Lists/UserList";
import axios from "axios";
import { ExportExcelButton } from "@/components/molecules/ExportExcelButton";

interface Props {
  users: any;
}

const BlacklistUserList: FC<Props> = ({ users }) => {
  const [list, setList] = useState<any>(users);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setList((user: any) =>
      users.filter((us: any) =>
        us.nama_user.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const changeUserStatus = (id: number, status: string) => {
    axios({
      method: "PATCH",
      url: `/api/users/status`,
      data: { id, status },
    })
    setList((user: any) =>
      user.filter((us: any) => {
        if (us.id_user !== id) {
          return us;
        }
      }),
    );
  };

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <div className="flex items-center">
          <Title className="text-2xl font-medium mr-4">Blacklist User</Title>
          <ExportExcelButton excelData={users} fileName="List-Blacklist" />
        </div>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <UserList users={list} changeStatus={changeUserStatus} />
    </ContainerMain>
  );
};

export default memo(BlacklistUserList);
