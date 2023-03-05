import { ContainerMain } from "@/components/atoms/Container";
import { MediumText, RegularText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  title: string;
  placeHolder?: string;
}

const TitleAdminPage: FC<Props> = ({ title, placeHolder }) => {
  const router = useRouter();
  const adminPage = router.asPath.split("/");

  return (
    <ContainerMain className="bg-cusWhite h-[87px] flex items-center w-full px-8 rounded-xl">
      <RegularText>
        <Title level={2} className="text-[22px] font-normal">
          <span
            className="cursor-pointer"
            onClick={() => router.replace("/" + adminPage[1] + "/" + adminPage[2])}
          >
            Admin / 
          </span>{" "}
          <span
            className="cursor-pointer"
            onClick={() => router.back()}
          >
            {placeHolder && placeHolder + " "}
          </span>
          <MediumText>{title}</MediumText>
        </Title>
      </RegularText>
    </ContainerMain>
  );
};

export default TitleAdminPage;
