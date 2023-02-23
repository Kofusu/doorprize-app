import { NoBGButton } from "@/components/atoms/Buttons";
import { ContainerMain } from "@/components/atoms/Container";
import { MediumText } from "@/components/atoms/Texts";
import ListPrize from "@/components/molecules/Lists/ListPrize";
import React, { FC, memo } from "react";

type Props = {
  prizes: any[];
};

const PrizeList: FC<Props> = ({ prizes }) => {
  return (
    <ContainerMain className="px-5 py-3 my-4 bg-inherit overflow-auto h-[585px]">
      <MediumText className="flex justify-between items-center">
        <NoBGButton className="border-[1px] border-cusBlack mb-4">
          Add Prize
        </NoBGButton>
      </MediumText>
      <ListPrize prizes={prizes} />
    </ContainerMain>
  );
};

export default memo(PrizeList);
