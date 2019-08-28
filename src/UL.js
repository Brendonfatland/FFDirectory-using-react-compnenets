import React from "react.js";

const UL = props => {
  return (
    <ul class="list" id="sortable">
      {props.children}
    </ul>
  );
};

export default UL;
