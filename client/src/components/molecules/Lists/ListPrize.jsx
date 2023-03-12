import React from "react";

import { PrizeCard } from "../SessionCard";

const ListPrize = ({ prizes }) => {
  return (
    <div className="mx-20 h-[465px] mt-2 grid grid-cols-3 gap-3 overflow-auto">
      {prizes?.map((prize) => (
        <PrizeCard key={prize.id_session} prize={prize} />
      ))}
    </div>
  );
};

export default ListPrize;
