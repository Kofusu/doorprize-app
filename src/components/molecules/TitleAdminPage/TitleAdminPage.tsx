import { ContainerMain } from "@/components/atoms/Container";
import { MediumText, RegularText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import React, { FC } from "react";

interface Props {
  title: string;
}

const TitleAdminPage: FC<Props> = ({ title }) => {
  return (
    <ContainerMain className="bg-cusWhite h-[87px] flex items-center w-full px-8 rounded-xl">
      <RegularText>
        <Title level={2} className="text-[22px] font-normal">
          Admin / <MediumText>{title}</MediumText>
        </Title>
      </RegularText>
    </ContainerMain>
  );
};

export default TitleAdminPage;
