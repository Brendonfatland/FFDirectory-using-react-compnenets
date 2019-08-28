import React from "react";
import ReactDOM from "react-dom";
import Container from "container";
import UL from "UL";
import LI from "LI";

const App = () => {
  return (
    <Container>
      <UL>
        <LI>
          <img
            src="http://employeedir.wpengine.com/wp-content/uploads/2018/11/Devang-Shah-directory.jpg"
            alt=""
            width="280"
            height="280"
            class="alignnone size-full wp-image-87"
          />
          <div class="OrangeBox">
            <h3 class="name">Devang Shah</h3>
            <span class="MainExt">x 115</span>
            <p class="StylePInEachOrangeBox">PRESIDENT</p>
            <span class="DepartmentLabel">EXECUTIVE</span>

            <div class="hidenOnLoad 1">
              Email:{" "}
              <button
                title="Click to copy"
                class="btn"
                data-clipboard-text="devang@fireflycomputers.com"
              >
                {" "}
                devang@fireflycomputers.com{" "}
              </button>
              Direct: 612-255-3100 Cell: 651-355-9998 Strengths:
              <span class="Yellow">Competition</span>{" "}
              <span class="Blue">Relator</span>{" "}
              <span class="Blue">Empathy</span>{" "}
              <span class="Purple">Achiever</span>{" "}
              <span class="Red">Ideation</span>
            </div>
          </div>
        </LI>

        <li class="ui-state-default styleCol Tech Learner	Restorative	Empathy	Intellection	Consistency">
          <img
            src="http://employeedir.wpengine.com/wp-content/uploads/2018/11/Jay-Wilhelmy-directory.jpg"
            alt=""
            width="280"
            height="280"
            class="alignnone size-full wp-image-89"
          />
          <div class="OrangeBox">
            <h3 class="name">Jay Wilhelmy</h3>
            <span class="MainExt">x 119</span>
            <p class="StylePInEachOrangeBox">SOLUTIONS SPECIALIST</p>
            <span class="DepartmentLabel">TECH</span>

            <div class="hidenOnLoad 1">
              Email:{" "}
              <button
                title="Click to copy"
                class="btn"
                data-clipboard-text="jwilhelmy@fireflycomputers.com"
              >
                {" "}
                jwilhelmy@fireflycomputers.com{" "}
              </button>
              Direct: 612-808-9393 Cell: N/A Strengths:
              <span class="Red">Learner</span>{" "}
              <span class="Purple">Restorative</span>{" "}
              <span class="Blue">Empathy</span>{" "}
              <span class="Red">Intellection</span>{" "}
              <span class="Purple">Consistency</span>
            </div>
          </div>
        </li>
      </UL>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
