import { Typography } from "antd";
import React from "react";

const Title = ({ level, children, className }) => {
  return (
    <Typography.Title level={level} className={`mb-0 ${className}`}>
      {children}
    </Typography.Title>
  );
};

export default Title;
