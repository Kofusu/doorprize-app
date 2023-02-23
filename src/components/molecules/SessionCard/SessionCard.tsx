import { RegularText } from "@/components/atoms/Texts";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineRight } from "react-icons/ai";

interface Props {
  session: any;
}

const SessionCard: FC<Props> = ({ session }) => {
  return (
    <Link href={`/admin/doorprize/${session?.id_session}`}>
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
