import React, { memo, useEffect, useState } from "react";

import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import { Searchbar } from "@/components/molecules/Searchbar";
import ListSession from "@/components/molecules/Lists/ListSession";
import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons";
import AddSessionsModal from "@/components/molecules/Modal/AddSessionsModal";
import axios from "axios";
import { Link } from "react-router-dom";

const SessionList = ({ sessions }) => {
  const [list, setList] = useState(sessions);
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    setList(sessions)
  }, [setList, sessions])

  const changeHandler = (e) => {
    setList(() =>
      sessions.filter((us) =>
        us.nama_session.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const onOpenModal = () => {
    setModalDisplay(true);
  };

  const onOk = (text) => {
    axios
      .post(`/api/sessions/session`, {
        namaSessions: text,
      })
      .then((res) => {
        setList(res.data);
        setModalDisplay(false);
      });
  };

  const onCancel = () => {
    setModalDisplay(false);
  };

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <div>
          <NoBGButton
            onClick={onOpenModal}
            className="bg-inherit text-cusBlack border-[1px] border-cusBlack"
            disabled={list?.length >= 4}
          >
            Tambah Sesi
          </NoBGButton>
          <Link to="/admin/background">
            <NoBGButton className="bg-inherit text-cusBlack border-[1px] border-cusBlack">
              Edit Background
            </NoBGButton>
          </Link>
        </div>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <ListSession sessions={list} />
      <AddSessionsModal
        isDisplay={modalDisplay}
        onOk={onOk}
        onCancel={onCancel}
      />
    </ContainerMain>
  );
};

export default memo(SessionList);
