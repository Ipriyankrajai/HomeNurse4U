import React from "react";

const Card = (props) => {
  const { children, bgColor } = props;
  return (
    <div className={`${bgColor}`}>
      <div>{children}</div>
    </div>
  );
};

export default Card;
