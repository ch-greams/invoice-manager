import React from "react";
import ReactDOM from "react-dom";


const name = "John Doe";

const consultantElement: JSX.Element = (
    <div className={"box"}>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{"Consultant"}</div>
        </div>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{"Name"}</div>
            <div className={"tableCell"}>{name}</div>
        </div>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{"Phone"}</div>
            <div className={"tableCell"}>{"11111"}</div>
        </div>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{"Email"}</div>
            <div className={"tableCell"}>{"john@doe.com"}</div>
        </div>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{"Address"}</div>
            <div className={"tableCell"}>{"Accra, Ghana"}</div>
        </div>
        <div className={"tableRow"}>
            <div className={"tableCell"}>{""}</div>
            <div className={"tableCell"}>{"2771 John st."}</div>
        </div>
    </div>

);

const tableElement: JSX.Element = (
    <div className={"box"}>
        <div className={"tableRow"}>
            <div className={"tableCell"}>
                {"Timesheet"}
            </div>
        </div>

        <div className={"tableRow"}>
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

        <div className={"tableRow"}>
            <div className={"tableCell"}>
                {"8/11/2020"}
            </div>
            <div className={"tableCell"}>
                {"7"}
            </div>
            <div className={"tableCell"}>
                {"30"}
            </div>
            <div className={"tableCell"}>
                {"210"}
            </div>
        </div>

        <div className={"tableRow"}>
            <div className={"tableCell"}>
                {"8/12/2020"}
            </div>
            <div className={"tableCell"}>
                {"3"}
            </div>
            <div className={"tableCell"}>
                {"30"}
            </div>
            <div className={"tableCell"}>
                {"90"}
            </div>
        </div>

        <div className={"tableRow"}>
            <div className={"tableCell"}>
                {"8/13/2020"}
            </div>
            <div className={"tableCell"}>
                {"3"}
            </div>
            <div className={"tableCell"}>
                {"60"}
            </div>
            <div className={"tableCell"}>
                {"180"}
            </div>
        </div>

        <div className={'tableRow'}>
            <div className={'tableCell'}>
                {"8/14/2020"}
            </div>
            <div className={'tableCell'}>
                {"8"}
            </div>
            <div className={'tableCell'}>
                {"30"}
            </div>
            <div className={'tableCell'}>
                {"240"}
            </div>
        </div>

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

