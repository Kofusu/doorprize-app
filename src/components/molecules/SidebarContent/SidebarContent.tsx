import { RegularText } from "@/components/atoms/Texts";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  active?: boolean;
  href: string;
}

const SidebarContent: FC<Props> = ({ children, text, active, href }) => {
  return (
    <Link href={href}>
      <li
        className={`flex items-center w-full h-[80px] p-5 hover:bg-primary hover:bg-opacity-70 cursor-pointer ${
          active && "bg-primary"
        }`}
      >
        {children}
        <RegularText className="text-[18px] ml-4">{text}</RegularText>
      </li>
    </Link>
  );
};

export default SidebarContent;
