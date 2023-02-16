import { ContainerMain } from "@/components/atoms/Container";
import { HorizontalDivider } from "@/components/atoms/Divider";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { WinnerList } from "@/components/molecules/Lists";
import React, { FC, memo } from "react";

interface Props {}

const DashboardList: FC<Props> = () => {
  return (
    <ContainerMain className="py-[25px]">
      <MediumText>
        <Title className="text-2xl font-medium ml-5">Pemenang Doorprize</Title>
      </MediumText>
      <HorizontalDivider className="my-[25px]" />
      <WinnerList />
    </ContainerMain>
  );
};

export default memo(DashboardList);
