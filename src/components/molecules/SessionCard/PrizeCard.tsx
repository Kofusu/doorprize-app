import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons";
import { RegularText } from "@/components/atoms/Texts";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  prize: any;
}

const PrizeCard: FC<Props> = ({ prize }) => {
  return (
    <div className="cursor-pointer h-[320px] py-6 border-[1px] bg-cusWhite flex items-center flex-col px-4 rounded-xl">
      <Image alt={prize.nama_prize} src={`/img/${prize.nama_gambar}`} width={200} height={200} />
      <RegularText className="text-[20px] mt-[25px]">{prize.nama_prize}</RegularText>
      <div className="mt-[25px] flex">
        <NoBGButton className="whitespace-nowrap">Start Generate</NoBGButton>
        <NoBGButton className="whitespace-nowrap">List Pemenang</NoBGButton>
      </div>
    </div>
  );
};

export default PrizeCard;
