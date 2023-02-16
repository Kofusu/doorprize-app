import { Card } from "@/components/atoms/Card";
import { RegularText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import React, { FC, ReactNode } from "react";

interface Props {
  color: string;
  total: number;
  name: string;
  children: ReactNode;
}

const AdminDashboardCard: FC<Props> = ({ color, total, name, children }) => {
  return (
    <Card className={`${color}`}>
      <RegularText className="p-4 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center mb-2">
          {children}
          <Title level={3} className="text-[32px] font-normal text-inherit ml-[20px]">
            {total}
          </Title>
        </div>
        <span className="text-[20px] text-center mt-2">Jumlah {name}</span>
      </RegularText>
    </Card>
  );
};

export default AdminDashboardCard;
