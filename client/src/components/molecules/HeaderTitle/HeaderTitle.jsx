import React from "react";

import { SemiBoldText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import { Link } from "react-router-dom";

const HeaderTitle = ({ title }) => {
  return (
    <Link to="/admin/dashboard">
      <SemiBoldText>
        <Title level={1} className="text-[28px] text-white">
          {title}
        </Title>
      </SemiBoldText>
    </Link>
  );
};

export default HeaderTitle;
