import React, { ChangeEvent, FC, memo, useState } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Searchbar } from "@/components/molecules/Searchbar";
import UserList from "@/components/molecules/Lists/UserList";
import axios from "axios";

interface Props {
  users: any;
}

const BlacklistUserList: FC<Props> = ({ users }) => {
  const [list, setList] = useState<any>(users);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setList(users)
      return
    }

    setList((user: any) =>
      user.filter((us: any) => us.nama_user.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  const changeUserStatus = (id: number, status: string) => {
    console.log(`${process.env.NEXT_PUBLIC_HOST}/api/users/status`);

    axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_HOST}:3000/api/users/status`,
      data: { id, status },
    }).then(() => {
      setList((user: any) =>
        user.filter((us: any) => {
          if (us.id_user !== id) {
            return us;
          }
        }),
      );
    });
  };
  
  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <Title className="text-2xl font-medium">Blacklist User</Title>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <UserList users={list} changeStatus={changeUserStatus} />
    </ContainerMain>
  );
};

export default memo(BlacklistUserList);
