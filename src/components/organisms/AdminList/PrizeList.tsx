import { NoBGButton } from "@/components/atoms/Buttons";
import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import ListPrize from "@/components/molecules/Lists/ListPrize";
import { AddPrizeModal } from "@/components/molecules/Modal";
import React, { FC, memo, useState } from "react";

type Props = {
  prizes: any[];
};

const PrizeList: FC<Props> = ({ prizes }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const onAdd = () => {
    setIsModalOpen(true)
  }

  const onCancel = () => {
    setIsModalOpen(false)
  }

  const onSubmit = () => {
    setIsModalOpen(false)
  }
  
  return (
    <ContainerMain className="px-5 py-3 my-4 bg-inherit overflow-auto h-[585px]">
      <MediumText className="flex justify-between items-center">
        <NoBGButton onClick={onAdd} className="border-[1px] border-cusBlack mb-4">
          Add Prize
        </NoBGButton>
      </MediumText>
      {prizes[0].id_prize && <ListPrize prizes={prizes} />}
      <AddPrizeModal isDisplay={isModalOpen} onOk={onSubmit} onCancel={onCancel} />
    </ContainerMain>
  );
};

export default memo(PrizeList);
