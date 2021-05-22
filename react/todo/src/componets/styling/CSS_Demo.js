import React from "react";

const btnStyle = {
    color: "#fff",
    padding:10,
    backgroundColor:'blue',
};
export default class CSS_Demo extends React.Component
{
    render() {
        return (
            <div className="CSS_Demo ">
                Hello
                <button style={btnStyle} type="button">Ok</button>
            </div>
        );
    }
}