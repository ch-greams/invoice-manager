import React from "react";
import ConsultantBlock from "./ConsultantBlock";
import Timesheet from "./Timesheet";

const consultantLines: any = [
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

const tableLines: any = [
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

interface Props {
    props: any
}

class App extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div>
                <h1>Hello</h1>
                <ConsultantBlock props={consultantLines}></ConsultantBlock>
                <Timesheet props={tableLines}></Timesheet>
            </div>
        );
    };
};

export default App;