import React from "react";

const ContainerMain = ({ children, className }) => {
  return (
    <div
      className={`bg-cusWhite w-full rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerMain;
