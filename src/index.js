import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";
import UL from "./UL";
import LI from "./LI";
import IMG from "./IMG";
import OrangeBox from "./OrangeBox";

const App = () => {
  return (
    <Container>
      <UL>
        <LI className={"ui-state-default styleCol  Tech CDS"}>
          <IMG
            src={
              "http://employeedir.wpengine.com/wp-content/uploads/2018/11/Jay-Wilhelmy-directory.jpg"
            }
            width={280}
            height={280}
            class={"wp-image-89"}
          />
          <OrangeBox
            name={"Devo"}
            ext={"x 137"}
            title={"PRESIDENT"}
            department={"EXECUTIVE"}
            email={"devang@fireflycomputers.com"}
            direct={"910-363-6371"}
            cell={"910-363-6371"}
          />
        </LI>
        <LI
          className={
            "ui-state-default styleCol  Tech Learner	Restorative	Empathy	Intellection	Consistency"
          }
        >
          <IMG
            src={
              "http://employeedir.wpengine.com/wp-content/uploads/2018/11/Jay-Wilhelmy-directory.jpg"
            }
            width={280}
            height={280}
            className={"wp-image-89"}
          />
          <OrangeBox
            name={"Jay"}
            ext={"x 137"}
            title={"SOLUTIONS SPECIALIST"}
            department={"TECH"}
            email={"jwhilhelmy@fireflycomputers.com"}
            direct={"910-363-6371"}
            cell={"910-363-6371"}
            strengthColorOne={"blue"}
            strengthColorTwo={"blue"}
            strengthColorThree={"blue"}
            strengthColorFour={"blue"}
            strengthColorFive={"blue"}
            strengthsOne={"blue"}
            strengthsTwo={"blue"}
            strengthsThree={"blue"}
            strengthsFour={"blue"}
            strengthsFive={"blue"}
          />
        </LI>
      </UL>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
