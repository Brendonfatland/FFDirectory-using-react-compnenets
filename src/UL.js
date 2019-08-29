import React from "react";

const UL = props => {
  return (
    <ul className="list" id="sortable">
      {props.children}
    </ul>
  );
};

export default UL;
