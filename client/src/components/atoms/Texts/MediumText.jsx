import React from "react";

const MediumText = ({ className, children }) => {
  return (
    <span className={`${className} font-medium`}>
      {children}
    </span>
  );
};

export default MediumText;
