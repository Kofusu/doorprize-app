import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SecondaryButton: FC<Props> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-secondaryAdmin m-1 hover:opacity-70 disabled:opacity-30 text-white px-[13px] py-[11px] rounded-[10px] ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
