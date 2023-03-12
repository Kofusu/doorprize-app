import React from "react";

const RegularText = ({ className, children }) => {
  return (
    <span className={`${className} font-normal`}>
      {children}
    </span>
  );
};

export default RegularText;
