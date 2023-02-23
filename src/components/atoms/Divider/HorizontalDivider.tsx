import React, { FC } from "react";

interface Props {
  className?: string;
}

const HorizontalDivider: FC<Props> = ({ className }) => {
  return <div className={`border-b-[1px] border-default ${className}`} />;
};

export default HorizontalDivider;
