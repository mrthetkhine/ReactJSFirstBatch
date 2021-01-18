import React from 'react';

function HelloWorld(props)
{
    console.log("Props ",props);
    return (
        <div>
            <h4>
                Hello World Component {props.color}
            </h4>
            <HelloWorldClassComp name={'One'}/>
            <HelloWorldClassComp name={'Two'}/>
            <HelloWorldClassComp name={'Three'}/>
        </div>

    );
}
export class HelloWorldClassComp extends React.Component
{
    render() {
        
        return(
            <h3>
               Hello {this.props.name}
            </h3>
        );
    }
}
export default HelloWorld;