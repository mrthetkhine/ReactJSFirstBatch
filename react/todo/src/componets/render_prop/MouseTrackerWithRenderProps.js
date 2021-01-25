import React from "react";
import MouseWithRenderProps from "./MouseWithRenderProps";
import Cat from "./Cat";
export default class MouseTrackerWithRenderProps extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <MouseWithRenderProps
                    another={"Hello"}
                    render={ mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}