import React from "react";
import ReactDOM from "react-dom";

interface ConsultantParameter {
    label: string;
    value: string;
}

interface TableParameter {
    dateValue: string;
    hoursValue: number;
    rateValue: number;
    amountValue: number;
}

const tableLines: TableParameter[] = [
    {
        dateValue: "8/11/2020",
        hoursValue: 7,
        rateValue: 30,
        amountValue: 210,
    },
    {
        dateValue: "8/12/2020",
        hoursValue: 3,
        rateValue: 30,
        amountValue: 90,
    },
    {
        dateValue: "8/13/2020",
        hoursValue: 3,
        rateValue: 60,
        amountValue: 180,
    },
    {
        dateValue: "8/14/2020",
        hoursValue: 8,
        rateValue: 30,
        amountValue: 240,
    },

];

const consultantLines: ConsultantParameter[] = [
    {
        label: "Name",
        value: "John Doe",
    },
    {
        label: "Phone",
        value: "11111",
    },
    {
        label: "Email",
        value: "john@doe.com",
    },
    {
        label: "Address",
        value: "Accra, Ghana",
    },
    {
        label: "",
        value: "2771 John st.",
    },
];

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

const consultantElement: JSX.Element = (
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
);

const twoTablesAndHeaderElement = (
    <div>
        <h1>Hello</h1>
        {consultantElement}
        {tableElement}
    </div>
);

ReactDOM.render(twoTablesAndHeaderElement, document.getElementById("container"));
