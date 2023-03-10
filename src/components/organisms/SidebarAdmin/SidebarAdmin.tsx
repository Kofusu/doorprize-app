import React, { FC, memo } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { FiUserX } from "react-icons/fi";

import { SidebarContent } from "@/components/molecules/SidebarContent";

interface Props {
  pathname: string;
}

const SidebarAdmin: FC<Props> = ({ pathname }) => {
  return (
    <aside className="sticky z-40 w-[245px] bg-cusWhite top-[75px] left-0 bottom-0 h-[calc(100vh-75px)]">
      <ul className="pt-4">
        <SidebarContent
          active={pathname.includes("/admin/dashboard")}
          text="Dashboard"
          href="/admin/dashboard"
        >
          <RxDashboard size={28} />
        </SidebarContent>
        <SidebarContent
          active={pathname.includes("/admin/users")}
          text="List User"
          href="/admin/users"
        >
          <BsPeople size={28} />
        </SidebarContent>
        <SidebarContent
          active={pathname.includes("/admin/blacklist-users")}
          text="List Blacklist User"
          href="/admin/blacklist-users"
        >
          <FiUserX size={28} />
        </SidebarContent>
        <SidebarContent
          active={pathname.includes("/admin/doorprize")}
          text="Doorprize"
          href={"/admin/doorprize"}
        >
          <AiOutlineGift size={28} />
        </SidebarContent>
      </ul>
    </aside>
  );
};

export default memo(SidebarAdmin);
