import React, { FC, ReactNode } from "react";

import { poppinsReguler } from "@/utils/fonts";

interface Props {
  className?: string;
  children?: ReactNode;
}

const RegularText: FC<Props> = ({ className, children }) => {
  return (
    <span className={`${className} ${poppinsReguler.className}`}>
      {children}
    </span>
  );
};

export default RegularText;
