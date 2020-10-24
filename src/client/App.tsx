import React from "react";
import ConsultantBlock from "./ConsultantBlock";
import Timesheet, { TableParameter } from "./Timesheet";

const tableLines: TableParameter[] = [
    {
        dateValue: "8/11/2020",
        hoursValue: 7,
        rateValue: 30,
    },
    {
        dateValue: "8/12/2020",
        hoursValue: 3,
        rateValue: 30,
    },
    {
        dateValue: "8/13/2020",
        hoursValue: 3,
        rateValue: 60,
    },
    {
        dateValue: "8/14/2020",
        hoursValue: 8,
        rateValue: 30,
    },

];

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <h1>{"Hello"}</h1>
                <ConsultantBlock
                    name={"John Doe"} 
                    phone={"11111"} 
                    email={"john@doe.com"} 
                    addressFirst={"Accra, Ghana"} 
                    addressSecond={"2771 John st."} 
                />
                <Timesheet data={tableLines} />
            </div>
        );
    }
}

export default App;
