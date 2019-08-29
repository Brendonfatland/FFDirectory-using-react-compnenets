import React from "react";

const IMG = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.class}
    />
  );
};

export default IMG;
