import React from "react"

interface TableParameter {
    dateValue: string;
    hoursValue: number;
    rateValue: number;
    amountValue: number;
}

interface Props {
    date: string;
    hours: number;
    rate: number;
    amount: number;
}

class Timesheet extends React.Component<Props> {
    public render(): JSX.Element {
        const tableLines: TableParameter[] = [
            {
                dateValue: this.props.date,
                hoursValue: this.props.hours,
                rateValue: this.props.rate,
                amountValue: this.props.amount,
            },      
        ];
        return (
            <div className={"box"}>
                <div className={"tableRow textLabel"}>
                    <div className={"tableCell"}>{"Timesheet"}</div>
                </div>
                <div className={"tableRow textLabel"}>
                    <div className={"tableCell"}>{"Date"}</div>
                    <div className={"tableCell"}>{"Hours"}</div>
                    <div className={"tableCell"}>{"Rate"}</div>
                    <div className={"tableCell"}>{"Amount"}</div>
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
    };
};

export default { Timesheet };
