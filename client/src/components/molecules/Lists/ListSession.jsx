import React from "react";

import { SessionCard } from "../SessionCard";

const ListSession = ({ onClick, sessions }) => {
  return (
    <div className="mx-5 h-[465px] mt-8 overflow-auto">
      {sessions?.map((sess) => (
        <SessionCard key={sess?.id_session} session={sess} />
      ))}
    </div>
  );
};

export default ListSession;
