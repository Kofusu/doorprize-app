import React, { FC, memo } from "react";
import { BsPeople } from "react-icons/bs";

import { AdminDashboardCard } from "@/components/molecules/AdminDashboardCard";
import { FiUserX } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";

interface Props {}

const AdminDashboardCardList: FC<Props> = () => {
  return (
    <div className="grid grid-cols-4 py-6 gap-[50px]">
      <AdminDashboardCard color="bg-cyan-500" name="User" total={2209}>
        <BsPeople size={40} />
      </AdminDashboardCard>
      <AdminDashboardCard color="bg-cusBlack" name="Blacklist User" total={10}>
        <FiUserX size={40} />
      </AdminDashboardCard>
      <AdminDashboardCard color="bg-red-500" name="Pemenang" total={0}>
        <BsPeople size={40} />
      </AdminDashboardCard>
      <AdminDashboardCard color="bg-yellow-500" name="Doorprize" total={30}>
        <AiOutlineGift size={40} />
      </AdminDashboardCard>
    </div>
  );
};

export default memo(AdminDashboardCardList);
