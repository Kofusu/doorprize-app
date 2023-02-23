import React, { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Row: FC<Props> = ({ className, children }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;
