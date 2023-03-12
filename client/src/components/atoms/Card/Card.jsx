import React from "react";

const Card = ({ className, children }) => {
  return (
    <div className={`h-[130px] text-cusWhite rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
