import React from "react";

export interface TableParameter {
    dateValue: string;
    hoursValue: number;
    rateValue: number;
}

interface Props {
    data: TableParameter[];
}

export default class Timesheet extends React.Component<Props> {
    public render(): JSX.Element {
        const tableLines: TableParameter[] = this.props.data;
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
                        <div key={element.dateValue} className={"tableRow"}>
                            <div className={"tableCell"}>{element.dateValue}</div>
                            <div className={"tableCell"}>{element.hoursValue}</div>
                            <div className={"tableCell"}>{element.rateValue}</div>
                            <div className={"tableCell"}>{element.hoursValue * element.rateValue}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
