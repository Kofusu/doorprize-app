import React from "react";

const SemiBoldText = ({ className, children }) => {
  return (
    <span className={`${className} font-semibold`}>
      {children}
    </span>
  );
};

export default SemiBoldText;
