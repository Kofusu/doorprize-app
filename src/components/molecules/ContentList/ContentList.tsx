import React, { FC } from "react";

import { RegularText } from "@/components/atoms/Texts";

interface Props {
  text: string | number;
  className?: string;
}

const ContentList: FC<Props> = ({ text, className }) => {
  return (
    <RegularText className={`text-[18px] overflow-x-auto text ${className}`}>
      {text}
    </RegularText>
  );
};

export default ContentList;
