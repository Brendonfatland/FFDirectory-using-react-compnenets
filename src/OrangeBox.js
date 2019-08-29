import React from "react";

const OrangeBox = props => {
  return (
    <div className="OrangeBox">
      <h3 className="name">{props.name}</h3>
      <span className="MainExt">{props.ext}</span>
      <p className="StylePInEachOrangeBox">{props.title}</p>
      <span className="DepartmentLabel">{props.department}</span>
      <div class="hidenOnLoad 1">
        Email:
        <button
          title="Click to copy"
          className="btn"
          data-clipboard-text={props.email}
        >
          {props.email}
        </button>
        Direct: {props.direct} Cell: {props.cell} Strengths:
        <span className={props.strengthColorOne}>{props.strengthsOne}</span>
        <span className={props.strengthColorTwo}>{props.strengthsTwo}</span>
        <span className={props.strengthColorThree}>{props.strengthsThree}</span>
        <span className={props.strengthColorFour}>{props.strengthsFour}</span>
        <span className={props.strengthColorFive}>{props.strengthsFive}</span>
      </div>
    </div>
  );
};

export default OrangeBox;
