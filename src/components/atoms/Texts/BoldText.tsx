import React, { FC, ReactNode } from "react";

import { poppinsBold } from "@/utils/fonts";

interface Props {
  className?: string;
  children?: ReactNode;
}

const BoldText: FC<Props> = ({ className, children }) => {
  return (
    <span className={`${className} ${poppinsBold.className}`}>{children}</span>
  );
};

export default BoldText;
