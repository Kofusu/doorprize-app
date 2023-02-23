import React, { FC, ReactNode } from "react";

import { RegularText } from "@/components/atoms/Texts";

interface Props {
  children: ReactNode;
  className?: string;
}

const ContentAksi: FC<Props> = ({ children, className }) => {
  return (
    <RegularText className={`text-[18px] overflow-x-auto text ${className}`}>
      {children}
    </RegularText>
  );
};

export default ContentAksi;
