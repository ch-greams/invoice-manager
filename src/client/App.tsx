import React from "react";
import ConsultantBlock from "./ConsultantBlock";
import Timesheet from "./Timesheet";
import { TableParameter } from "./Timesheet";

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

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <h1>Hello</h1>
                <ConsultantBlock name="John Doe" phone="11111" email="john@doe.com" addressFirst="Accra, Ghana" addressSecond="2771 John st."></ConsultantBlock>
                <Timesheet data={tableLines}></Timesheet>
            </div>
        );
    };
};

export default App;
