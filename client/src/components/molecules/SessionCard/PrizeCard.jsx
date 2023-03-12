import { RegularText } from "@/components/atoms/Texts";
import { apiEndpoint } from "@/configs/config";
import React from "react";
import { Link } from "react-router-dom";

const PrizeCard = ({ prize }) => {
  return (
    <div className="overflow-hidden cursor-pointer h-[300px] py-6 border-[1px] bg-white flex items-center flex-col px-4 rounded-xl">
      <img alt={prize.nama_prize} src={`${apiEndpoint}/public/img/${prize.nama_gambar}`} width={200} height={200} className="min-h-[100px]" />
      <RegularText className="text-[20px] mt-[25px]">{prize.nama_prize}</RegularText>
      <div className="mt-[25px] flex">
        <Link to={`${prize.id_prize}`}><div className="whitespace-nowrap underline mt-4 hover:opacity-75">See Detail</div></Link>
      </div>
    </div>
  );
};

export default PrizeCard;
