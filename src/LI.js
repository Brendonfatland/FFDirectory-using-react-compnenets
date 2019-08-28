import React from "react.js";

const LI = props => {
  return (
    <li class="ui-state-default styleCol  Tech CDS">
      <img
        src="http://www.firefly.family/wp-content/uploads/2019/05/Della-Xiong.jpg"
        alt=""
        width="280"
        height="280"
        class="alignnone size-full wp-image-1519"
      />
      <div class="OrangeBox">
        <h3 class="name">{props.name}</h3>
        <span class="MainExt">{props.ext}</span>
        <p class="StylePInEachOrangeBox">{props.title}</p>
        <span class="DepartmentLabel">{props.department}</span>
        <div class="hidenOnLoad 1">
          Email:{" "}
          <button
            title="Click to copy"
            class="btn"
            data-clipboard-text="{props.email}"
          >
            {" "}
            {props.email}{" "}
          </button>
          Direct: {props.direct}
          Cell: {props.cell}
          Strengths:<span class=""></span> <span class=""></span>{" "}
          <span class=""></span> <span class=""></span> <span class=""></span>
        </div>
      </div>
    </li>
  );
};
