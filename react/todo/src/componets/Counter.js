import React from 'react';

class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state= {
            counter: props.value || 0
        };
    }
    btnIncCounter()
    {
        console.log('This ',this);
        console.log('State ', this.state);
        let counter = this.state.counter+1;

        this.setState({
            counter
        })
    }
    render()
    {
        return(
            <div>
                Counter {this.state.counter}
                <br/>
                <button type="button" onClick={this.btnIncCounter.bind(this)}>Inc</button>
            </div>
        );
    }
}
export default  Counter;   