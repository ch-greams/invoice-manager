import React from "react";

interface ConsultantParameter {
    label: string;
    value: string;
}

interface Props {
    name: string;
    phone: string;
    email: string;
    addressFirst: string;
    addressSecond: string;
}

class ConsultantBlock extends React.Component<Props> {
    public render(): JSX.Element {
        const consultantLines: ConsultantParameter[] = [
            {
                label: "Name",
                value: this.props.name,
            },
            {
                label: "Phone",
                value: this.props.phone,
            },
            {
                label: "Email",
                value: this.props.email,
            },
            {
                label: "Address",
                value: this.props.addressFirst,
            },
            {
                label: "",
                value: this.props.addressSecond,
            },
        ];
        
        return (
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
    };
};

export default { ConsultantBlock };
