import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* consultantLines.map((element: ConsultantParameter) => {
    return (
        <div>
            {element}
        </div>
    );
}) */

/* const consultantRow: JSX.Element = (
    <div className={"tableRow"}>
        <div className={"tableCell"}>{consultantLines[0].label}</div>
        <div className={"tableCell"}>{consultantLines[0].value}</div>
    </div>
); */

/* const consultantElement: JSX.Element = (
    <div className={"box"}>
        <div className={"tableRow textLabel"}>
            <div className={"tableCell"}>{"Consultant"}</div>
        </div>
        {consultantLines.map((element: ConsultantParameter) => {
            return (
                <div key={element.label} className={"tableRow"}>
                    <div className={"tableCell"}>{element.label}</div>
                    <div className={"tableCell"}>{element.value}</div>
                </div>
            );
        })}
    </div>
);

const tableElement: JSX.Element = (
    <div className={"box"}>
        <div className={"tableRow textLabel"}>
            <div className={"tableCell"}>
                {"Timesheet"}
            </div>
        </div>
        <div className={"tableRow textLabel"}>
            <div className={"tableCell"}>
                {"Date"}
            </div>
            <div className={"tableCell"}>
                {"Hours"}
            </div>
            <div className={"tableCell"}>
                {"Rate"}
            </div>
            <div className={"tableCell"}>
                {"Amount"}
            </div>
        </div>
        {tableLines.map((element: TableParameter) => {
            return (
                <div key={element.amountValue} className={"tableRow"}>
                    <div className={"tableCell"}>{element.dateValue}</div>
                    <div className={"tableCell"}>{element.hoursValue}</div>
                    <div className={"tableCell"}>{element.rateValue}</div>
                    <div className={"tableCell"}>{element.amountValue}</div>
                </div>
            );
        })}
    </div>
); */

/* const twoTablesAndHeaderElement = (
    <div>
        <h1>Hello</h1>
        {consultantElement}
        {tableElement}
    </div>
);
 */

ReactDOM.render(<App />, document.getElementById("content"));
