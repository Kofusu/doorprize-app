import { RegularText } from "@/components/atoms/Texts";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SessionCard = ({ session }) => {
  return (
    <Link to={`/admin/sessions/${session?.id_session}`}>
      <div className="my-4 cursor-pointer h-[100px] shadow-md shadow-slate-500 border-[1px] bg-cusWhite flex items-center justify-between px-4 rounded-xl">
        <RegularText className="text-[20px]">
          {session?.nama_session}
        </RegularText>
        <AiOutlineRight size={24} />
      </div>
    </Link>
  );
};

export default SessionCard;
