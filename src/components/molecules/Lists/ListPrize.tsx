import React, { FC } from "react";

import { PrizeCard } from "../SessionCard";

interface Props {
  prizes: any[];
}

const ListPrize: FC<Props> = ({ prizes }) => {
  return (
    <div className="mx-5 h-[465px] mt-2 grid grid-cols-3 gap-20 overflow-auto">
      {prizes.map((prize: any) => (
        <PrizeCard key={prize.id_session} prize={prize} />
      ))}
    </div>
  );
};

export default ListPrize;
