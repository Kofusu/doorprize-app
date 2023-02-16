import React, { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={`h-[130px] text-cusWhite rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
