import React from 'react';

class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state= {
            counter: props.value || 0
        };
        console.log('Constructor called');
    }
    componentDidMount() {
        console.log('Component did mount');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    btnIncCounter()
    {
        console.log('This ',this);
        console.log('State ', this.state);
        let counter = this.state.counter+1;

        this.setState({
            counter
        });
    }
    render()
    {
        console.log('Render');
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