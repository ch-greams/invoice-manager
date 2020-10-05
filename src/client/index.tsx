import React from "react";
import ReactDOM from "react-dom";

const headerElement: JSX.Element = (
    <head>
    <title>Invoice Manager</title>
    <link rel="stylesheet" href="/index.css"></link>
    </head>
);

const name = "John Doe";

const consultantElement: JSX.Element = (
    <div className={"divTable"}>
        <div className={"headRow"}>
            <div className={"divCell"}>{"Consultant"}</div>
        </div>
        <div className={"divRow"}>
            <div className={"divCell"}>{"Name"}</div>
            <div className={"divCell"}>{name}</div>
        </div>
        <div className={"divRow"}>
            <div className={"divCell"}>{"Phone"}</div>
            <div className={"divCell"}>{"1111111"}</div>
        </div>
        <div className={"divRow"}>
            <div className={"divCell"}>{"Email"}</div>
            <div className={"divCell"}>{"John@doe.com"}</div>
        </div>
        <div className={"divRow"}>
            <div className={"divCell"}>{"Address"}</div>
            <div className={"divCell"}>{"Accra, Ghana"}</div>
        </div>
        <div className={"divRow"}>
            <div className={"divCell"}>{""}</div>
            <div className={"divCell"}>{"2771 John st."}</div>
        </div>

    </div>

);

const tableElement: JSX.Element = (
    <table>
        <tr>
            <th>Timesheet</th>
        </tr>
        <tr>
            <th>Date</th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>8/11/2020</td>
            <td>7</td>
            <td>30</td>
            <td>210</td>
        </tr>
        <tr>
            <td>8/12/2020</td>
            <td>3</td>
            <td>30</td>
            <td>90</td>
        </tr>
        <tr>
            <td>8/13/2020</td>
            <td>3</td>
            <td>60</td>
            <td>180</td>
        </tr>
        <tr>
            <td>8/14/2020</td>
            <td>8</td>
            <td>30</td>
            <td>240</td>
        </tr>

    </table>
);

ReactDOM.render(consultantElement, document.getElementById("container"));
ReactDOM.render(tableElement, document.getElementById("table"));
ReactDOM.render(headerElement, document.getElementById("header"));
