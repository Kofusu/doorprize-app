import { Typography } from "antd";
import React, { FC, ReactNode } from "react";

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  children: ReactNode;
  className?: string;
}

const Title: FC<Props> = ({ level, children, className }) => {
  return (
    <Typography.Title level={level} className={`mb-0 ${className}`}>
      {children}
    </Typography.Title>
  );
};

export default Title;
