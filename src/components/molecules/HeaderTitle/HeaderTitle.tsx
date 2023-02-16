import React, { FC } from "react";

import { SemiBoldText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import Link from "next/link";

interface Props {
  title: string;
}

const HeaderTitle: FC<Props> = ({ title }) => {
  return (
    <Link href="/admin/dashboard">
      <SemiBoldText>
        <Title level={1} className="text-[28px] text-inherit">
          {title}
        </Title>
      </SemiBoldText>
    </Link>
  );
};

export default HeaderTitle;
