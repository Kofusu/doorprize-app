import React from "react";

const PrimaryButton = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-secondary m-1 hover:opacity-70 disabled:opacity-30 text-white px-[13px] py-[11px] rounded-[10px] ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
