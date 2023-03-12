import { ContainerMain } from "@/components/atoms/Container";
import { RegularText } from "@/components/atoms/Texts";
import { apiEndpoint } from "@/configs/config";
import React, { useState } from "react";
import { RandomReveal } from "react-random-reveal";

const GenerateWinner = ({ prize = [], winner = [] }) => {
  const [isGenerate, setIsGenerate] = useState(false);

  const { max_winner = 0 } = prize;
  const columnWinner =
    max_winner <= 10 ? 1 : max_winner <= 20 ? 2 : max_winner <= 30 ? 3 : 4;

  const generateWinner = () => {
    setIsGenerate(true);
  };

  return (
    <ContainerMain className="px-5 py-3 my-4 overflow-auto h-[585px]">
      <div className="flex items-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center bg-opacity-40">
          <img
            src={`${apiEndpoint}/public/img/${prize.nama_gambar}`}
            alt=""
            width={300}
            height={300}
            className="min-h-[100px] mb-10"
          />
          <RegularText className="text-[24px]">{prize.nama_prize} - {prize.max_winner} Unit</RegularText>
        </div>
        <div className="flex-[2] bg-[#A2D5F2] h-[90%] bg-opacity-40 mx-12">
          <header className="h-[102px] bg-[#FFC93C] bg-opacity-60 flex items-center">
            <div
              onClick={generateWinner}
              className="h-full flex justify-center items-center"
            >
              {!winner.length && <RegularText className="cursor-pointer h-[85%] shadow-xl mx-4 rounded-full w-[88px] bg-[#E2E2E2] flex items-center justify-center text-center">
                Start Generate
              </RegularText>}
            </div>
            <RegularText className="text-[36px] flex-1 text-center">
              {!winner?.length ? (
                <RandomReveal
                  isPlaying={isGenerate}
                  duration={2}
                  characters="Rania"
                  revealEasing="random"
                  onComplete={() => ({ shouldRepeat: true, delay: 3 })}
                />
              ) : `Pemenang ${prize.nama_prize}`}
            </RegularText>
          </header>
          <div className={`grid gap-8 grid-cols-${columnWinner} p-4`}>
            {winner?.map((win, i) => (
              <div key={win.id_user} className="flex items-center gap-2 border-b-cusBlack border-dotted border-[1px]">
                <span className="px-3 rounded-md py-1 border-[1px] border-cusBlack">
                  {i + 1}
                </span>
                <RegularText className="text-[20px] text-center flex-1">
                  {win.nama_user} - {win.domisili}
                </RegularText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerMain>
  );
};

export default GenerateWinner;
