import React from "react";

const BoldText = ({ className, children }) => {
  return (
    <span className={`${className} font-bold`}>{children}</span>
  );
};

export default BoldText;
