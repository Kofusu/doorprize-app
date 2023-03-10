import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const NoBGButton: FC<Props> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-[1px] border-cusBlack bg-inherit m-1 hover:opacity-70 disabled:opacity-30 text-cusBlack px-5 py-[11px] rounded-[10px] ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default NoBGButton;
