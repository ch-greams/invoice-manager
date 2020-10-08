import React from "react";
import ReactDOM from "react-dom";


const name = "John Doe";

const consultantElement: JSX.Element = (
    <div className="box">
        <div className="row">
            <div className="column">{"Consultant"}</div>
            <div className="column">{""}</div>
        </div>
        <div className="row">
            <div className="column">{"Name"}</div>
            <div className="column">{name}</div>
        </div>
        <div className="row">
            <div className="column">{"Phone"}</div>
            <div className="column">{"11111"}</div>
        </div>
        <div className="row">
            <div className="column">{"Email"}</div>
            <div className="column">{"john@doe.com"}</div>
        </div>
        <div className="row">
            <div className="column">{"Address"}</div>
            <div className="column">{"Accra, Ghana"}</div>
        </div>
        <div className="row">
            <div className="column">{""}</div>
            <div className="column">{"2771 John st."}</div>
        </div>
    </div>

);

const tableElement: JSX.Element = (
    <div className="box">
        <div className="row">
            <div className="column">
                {"Timesheet"}
            </div>
            <div className="column">
                {""}
            </div>
            <div className="column">
                {""}
            </div>
            <div className="column">
                {""}
            </div>
        </div>

        <div className="row">
            <div className="column">
                {"Date"}
            </div>
            <div className="column">
                {"Hours"}
            </div>
            <div className="column">
                {"Rate"}
            </div>
            <div className="column">
                {"Amount"}
            </div>
        </div>

        <div className="row">
            <div className="column">
                {"8/11/2020"}
            </div>
            <div className="column">
                {"7"}
            </div>
            <div className="column">
                {"30"}
            </div>
            <div className="column">
                {"210"}
            </div>
        </div>

        <div className="row">
            <div className="column">
                {"8/12/2020"}
            </div>
            <div className="column">
                {"3"}
            </div>
            <div className="column">
                {"30"}
            </div>
            <div className="column">
                {"90"}
            </div>
        </div>

        <div className="row">
            <div className="column">
                {"8/13/2020"}
            </div>
            <div className="column">
                {"3"}
            </div>
            <div className="column">
                {"60"}
            </div>
            <div className="column">
                {"180"}
            </div>
        </div>

        <div className='row'>
            <div className='column'>
                {"8/14/2020"}
            </div>
            <div className='column'>
                {"8"}
            </div>
            <div className='column'>
                {"30"}
            </div>
            <div className='column'>
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

