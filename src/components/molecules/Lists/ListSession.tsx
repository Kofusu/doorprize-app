import React, { FC } from "react";

import { SessionCard } from "../SessionCard";

interface Props {
  onClick?: () => void;
  sessions: any[];
}

const ListSession: FC<Props> = ({ onClick, sessions }) => {
  return (
    <div className="mx-5 h-[465px] mt-8 overflow-auto">
      {sessions?.map((sess: any) => (
        <SessionCard key={sess?.id_session} session={sess} />
      ))}
    </div>
  );
};

export default ListSession;
