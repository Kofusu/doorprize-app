import React from "react";

const Column = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 overflow-auto ${className}`}>
      {children}
    </div>
  )
};

export default Column;
