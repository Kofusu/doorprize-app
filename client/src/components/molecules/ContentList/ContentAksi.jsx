import React from "react";

import { RegularText } from "@/components/atoms/Texts";

const ContentAksi = ({ children, className }) => {
  return (
    <RegularText className={`text-[18px] overflow-x-auto text ${className}`}>
      {children}
    </RegularText>
  );
};

export default ContentAksi;
