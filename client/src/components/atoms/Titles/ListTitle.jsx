import { Typography } from "antd";
import React from "react";
import { HorizontalDivider } from "../Divider";

const ListTitle = ({ children, className }) => {
  return (
    <Typography.Title level={3} className={`text-[22px] sticky top-0 bg-cusWhite font-normal my-0 ${className}`}>
      {children}
      <HorizontalDivider />
    </Typography.Title>
  );
};

export default ListTitle;
