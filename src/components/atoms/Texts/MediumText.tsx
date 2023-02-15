import React, { FC, ReactNode } from "react";

import { poppinsMedium } from "@/utils/fonts";

interface Props {
  className?: string;
  children?: ReactNode;
}

const MediumText: FC<Props> = ({ className, children }) => {
  return (
    <span className={`${className} ${poppinsMedium.className}`}>
      {children}
    </span>
  );
};

export default MediumText;
