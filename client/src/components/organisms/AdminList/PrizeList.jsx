import { NoBGButton } from "@/components/atoms/Buttons";
import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import ListPrize from "@/components/molecules/Lists/ListPrize";
import { AddPrizeModal } from "@/components/molecules/Modal";
import axios from "axios";
import React, { FC, memo, useEffect, useState } from "react";

const PrizeList = ({ prizes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState(prizes);

  useEffect(() => {
    setList(prizes)
  }, [setList, prizes])

  const onAdd = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (unit, caption, file) => {

    const formData = new FormData();
    formData.append("unit", unit);
    formData.append("caption", caption);
    formData.append("id_session", prizes[0].id_session);
    formData.append("theFiles", file);
    axios.post("/api/sessions/prize", formData).then(({ data }) => {
      setList(data);
      setIsModalOpen(false);
    });
  };

  return (
    <ContainerMain className="px-5 py-3 my-4 overflow-auto h-[585px]">
      <MediumText className="flex justify-between items-center">
        <NoBGButton
          disabled={list.length >= 6}
          onClick={onAdd}
          className="border-[1px] border-cusBlack mb-4"
        >
          Add Prize
        </NoBGButton>
      </MediumText>
      {list[0]?.id_prize && <ListPrize prizes={list} />}
      <AddPrizeModal
        isDisplay={isModalOpen}
        onOk={onSubmit}
        onCancel={onCancel}
      />
    </ContainerMain>
  );
};

export default memo(PrizeList);
