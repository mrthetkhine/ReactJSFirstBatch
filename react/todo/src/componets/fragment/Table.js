import React from "react";

class Column extends React.Component
{
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );
    }
}
export default class Table extends React.Component
{
    render() {
        return(
            <table>
                <tr>
                    <Column/>
                </tr>
            </table>
        );

    }
}