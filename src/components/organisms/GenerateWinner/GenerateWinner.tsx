import { ContainerMain } from "@/components/atoms/Container";
import { RegularText } from "@/components/atoms/Texts";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  prize: any;
};

const GenerateWinner: FC<Props> = ({ prize }) => {
  return (
    <ContainerMain className="px-5 py-3 my-4 overflow-auto h-[585px]">
      <div className="flex items-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center bg-opacity-40">
          <img
            src={`http://127.0.0.1:8125/img/${prize.nama_gambar}`}
            alt=""
            width={300}
            height={300}
            className="min-h-[100px] mb-10"
          />
          <RegularText className="text-[24px]">{prize.nama_prize}</RegularText>
        </div>
        <div className="flex-[2] bg-[#A2D5F2] h-[90%] mx-12">
          <header className="h-[102px] bg-[#FFC93C] bg-opacity-60 flex items-center">
            <RegularText className="cursor-pointer h-[85%] shadow-xl mx-4 rounded-full w-[88px] bg-[#E2E2E2] flex items-center justify-center text-center">
              Start Generate
            </RegularText>
            <RegularText className="text-[36px] flex-1 text-center" >Rania</RegularText>
          </header>
        </div>
      </div>
    </ContainerMain>
  );
};

export default GenerateWinner;
