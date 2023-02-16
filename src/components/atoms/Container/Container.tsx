import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;
