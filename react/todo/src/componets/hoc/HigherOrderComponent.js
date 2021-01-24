import React from "react";

const HigherOrderComponent = (WrappedComponent)=>{
    class HOC extends React.Component
    {
        render() {
            return <WrappedComponent/>;
        }
    }
    return HOC;
}