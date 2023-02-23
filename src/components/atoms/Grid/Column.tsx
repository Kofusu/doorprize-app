import React, { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode
}

const Column: FC<Props> = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 overflow-auto ${className}`}>
      {children}
    </div>
  )
};

export default Column;
