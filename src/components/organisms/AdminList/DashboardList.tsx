import { ContainerMain } from "@/components/atoms/Container";
import { HorizontalDivider } from "@/components/atoms/Divider";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { ExportExcelButton } from "@/components/molecules/ExportExcelButton";
import { WinnerList } from "@/components/molecules/Lists";
import React, { FC, memo } from "react";

interface Props {
  winner: any[]
}

const DashboardList: FC<Props> = ({winner}) => {
  return (
    <ContainerMain className="py-[25px]">
      <MediumText className="flex items-center">
        <Title className="text-2xl font-medium ml-5  mr-4">Pemenang Doorprize</Title>
        <ExportExcelButton
            excelData={winner}
            fileName="winner"
          />
      </MediumText>
      <HorizontalDivider className="mt-[15px] mb-[16px]" />
      <WinnerList winner={winner} />
    </ContainerMain>
  );
};

export default memo(DashboardList);
