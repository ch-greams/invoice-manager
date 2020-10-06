import React from "react";
import ReactDOM from "react-dom";


const name = "John Doe";

const consultantElement: JSX.Element = (
    <div className="Rtable Rtable--2cols">
        <div className="Rtable-cell"><h3>{"Consultant"}</h3></div>
        <div className="Rtable-cell"></div>

         <div className="Rtable-cell"><h3>{"Name"}</h3></div>
         <div className="Rtable-cell">{name}</div>

         <div className="Rtable-cell"><h3>{"Phone"}</h3></div>
         <div className="Rtable-cell">{"11111"}</div>

         <div className="Rtable-cell"><h3>{"Email"}</h3></div>
         <div className="Rtable-cell">{"John@doe.com"}</div>

         <div className="Rtable-cell"><h3>{"Address"}</h3></div>
         <div className="Rtable-cell">{"Accra, Ghana"}</div>

         <div className="Rtable-cell"></div>
         <div className="Rtable-cell">{"2771 John st."}</div>
    </div>

);

const tableElement: JSX.Element = (
    <div className="Rtable Rtable--5cols">

  <div className="Rtable-cell"><h3>{"Timesheet"}</h3></div>
  <div className="Rtable-cell"></div>
  <div className="Rtable-cell"></div>
  <div className="Rtable-cell"></div>
  <div className="Rtable-cell"></div>
  
  <div className="Rtable-cell"><h3>{"Date"}</h3></div>
  <div className="Rtable-cell">{"8/11/2020"}</div>
  <div className="Rtable-cell">{"8/12/2020"}</div>
  <div className="Rtable-cell">{"8/13/2020"}</div>
  <div className="Rtable-cell">{"8/14/2020"}</div>

  <div className="Rtable-cell"><h3>{"Hours"}</h3></div>
  <div className="Rtable-cell">{"7"}</div>
  <div className="Rtable-cell">{"3"}</div>
  <div className="Rtable-cell">{"3"}</div>
  <div className="Rtable-cell">{"8"}</div>

  <div className="Rtable-cell"><h3>{"Rate"}</h3></div>
  <div className="Rtable-cell">{"30"}</div>
  <div className="Rtable-cell">{"30"}</div>
  <div className="Rtable-cell">{"60"}</div>
  <div className="Rtable-cell">{"30"}</div>

  <div className="Rtable-cell"><h3>{"Amount"}</h3></div>
  <div className="Rtable-cell">{"210"}</div>
  <div className="Rtable-cell">{"90"}</div>
  <div className="Rtable-cell">{"180"}</div>
  <div className="Rtable-cell">{"240"}</div>

</div>
);

const twoTablesAndHeaderElement =(
    <div className={"divTable"}>
        <h1>Hello</h1>
        {consultantElement}
        {tableElement}
    </div>
);

ReactDOM.render(twoTablesAndHeaderElement, document.getElementById("container"));

