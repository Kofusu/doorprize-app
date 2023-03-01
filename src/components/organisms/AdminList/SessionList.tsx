import React, { ChangeEvent, FC, memo, useState } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Searchbar } from "@/components/molecules/Searchbar";
import UserList from "@/components/molecules/Lists/UserList";
import ListSession from "@/components/molecules/Lists/ListSession";
import { PrimaryButton } from "@/components/atoms/Buttons";
import AddSessionsModal from "@/components/molecules/Modal/AddSessionsModal";
import axios from "axios";

interface Props {
  sessions: any[]
}

const SessionList: FC<Props> = ({sessions}) => {
  const [list, setList] = useState<any>(sessions);
  const [modalDisplay, setModalDisplay] = useState<any>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setList(() =>
      sessions.filter((us: any) => us.nama_session.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  const onOpenModal = () => {
    setModalDisplay(true)
  }

  const onOk = (text: string) => {
    axios.post(`/api/sessions/session`, {
      namaSessions: text
    }).then((res: any) => {
      setList(res.data)
      setModalDisplay(false)
    })
    
  }

  const onCancel = () => {
    setModalDisplay(false)
  }

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <PrimaryButton onClick={onOpenModal} className="bg-inherit text-cusBlack border-[1px] border-cusBlack">
          Tambah Sesi
        </PrimaryButton>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <ListSession sessions={list} />
      <AddSessionsModal isDisplay={modalDisplay} onOk={onOk} onCancel={onCancel} />
    </ContainerMain>
  );
};

export default memo(SessionList);
