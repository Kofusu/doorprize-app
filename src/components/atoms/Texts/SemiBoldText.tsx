import React, { FC, ReactNode } from "react";

import { poppinsSemiBold } from "@/utils/fonts";

interface Props {
  className?: string;
  children?: ReactNode;
}

const SemiBoldText: FC<Props> = ({ className, children }) => {
  return (
    <span className={`${className} ${poppinsSemiBold.className}`}>
      {children}
    </span>
  );
};

export default SemiBoldText;
