import { NoBGButton } from "@/components/atoms/Buttons";
import { ContainerMain } from "@/components/atoms/Container";
import { HorizontalDivider } from "@/components/atoms/Divider";
import { MediumText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { ExportExcelButton } from "@/components/molecules/ExportExcelButton";
import { WinnerList } from "@/components/molecules/Lists";
import { ResetWinnerConfirmModal } from "@/components/molecules/Modal";
import React, { memo } from "react";

const DashboardList = ({ winner, onReset }) => {
  return (
    <ContainerMain className="py-[25px]">
      <MediumText className="flex items-center">
        <Title className="text-2xl font-medium ml-5  mr-4">
          Pemenang Doorprize
        </Title>
        <ExportExcelButton excelData={winner} fileName="winner" />
        <ResetWinnerConfirmModal onClick={onReset}>
          <NoBGButton className="border-red-600 text-red-600">
            Reset Winner
          </NoBGButton>
        </ResetWinnerConfirmModal>
      </MediumText>
      <HorizontalDivider className="mt-[15px] mb-[16px]" />
      <WinnerList winner={winner} />
    </ContainerMain>
  );
};

export default memo(DashboardList);
