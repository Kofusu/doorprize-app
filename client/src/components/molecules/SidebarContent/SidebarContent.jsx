import { RegularText } from "@/components/atoms/Texts";
import React from "react";
import { Link } from "react-router-dom";

const SidebarContent = ({ children, text, active, href }) => {
  return (
    <Link to={href}>
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
