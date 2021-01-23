import React from 'react';

class ChildComponent extends React.Component
{


    render() {

        console.log('Child Component render');
        return (<h4>{this.props.counter}</h4>);
    }
}
export default ChildComponent;