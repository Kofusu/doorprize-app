import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons";
import { RegularText } from "@/components/atoms/Texts";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  prize: any;
}

const PrizeCard: FC<Props> = ({ prize }) => {
  return (
    <div className="overflow-hidden cursor-pointer h-[320px] py-6 border-[1px] bg-cusWhite flex items-center flex-col px-4 rounded-xl">
      <img alt={prize.nama_prize} src={`http://127.0.0.1:8125/img/${prize.nama_gambar}`} width={200} height={200} className="min-h-[100px]" />
      <RegularText className="text-[20px] mt-[25px]">{prize.nama_prize}</RegularText>
      <div className="mt-[25px] flex">
        <Link href={`prize/${prize.id_prize}`}><NoBGButton className="whitespace-nowrap">Winner Detail</NoBGButton></Link>
      </div>
    </div>
  );
};

export default PrizeCard;
