import React from "react";

import { RegularText } from "@/components/atoms/Texts";

const ContentList = ({ text, className }) => {
  return (
    <RegularText className={`text-[18px] overflow-x-auto text ${className}`}>
      {text}
    </RegularText>
  );
};

export default ContentList;
