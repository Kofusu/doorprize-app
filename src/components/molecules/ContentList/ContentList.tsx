import React, { FC } from "react";

import { RegularText } from "@/components/atoms/Texts";

interface Props {
  text: string;
}

const ContentList: FC<Props> = ({ text }) => {
  return <RegularText className="text-[18px]">{text}</RegularText>;
};

export default ContentList;
