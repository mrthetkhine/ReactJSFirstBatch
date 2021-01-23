import React from 'react';
import ChildComponent from './ChildComponent';
class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state= {
            name : 'Counter',
            counter: props.value || 0,

        };
        console.log('Constructor called');
        this.btnIncCounter = this.btnIncCounter.bind(this);
    }
    componentDidMount() {
        console.log('Component did mount');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log('Catch error ',error);
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
            counter : counter +1
        });
        this.setState({
            name: 'Counter '+ (counter +2)
        });
    }
    render()
    {
        console.log('Render');

        return(
            <div>

                {this.state.name}
                <br/>
                <ChildComponent counter={this.state.counter}/>
                <button type="button" onClick={this.btnIncCounter}>Inc</button>

            </div>
        );
    }
}
export default  Counter;   