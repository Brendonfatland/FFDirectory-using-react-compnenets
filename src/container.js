import React from "react";

const Container = props => {
  return (
    <div className="container text-center employeesContainer">
      <div className="row styleRow">{props.children}</div>
    </div>
  );
};

export default Container;
