import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ContainerMain: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`bg-cusWhite w-full rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerMain;
