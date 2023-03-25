import React from "react";

const NoBGButton = ({
  children,
  className,
  onClick,
  disabled,
  type
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-[1px] border-cusBlack m-1 hover:opacity-70 disabled:opacity-30 text-cusBlack px-5 ${type ? 'py-[8px]' :'py-[11px]'} rounded-[10px] ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default NoBGButton;
