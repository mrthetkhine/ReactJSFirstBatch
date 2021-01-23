import React from 'react';
import PropTypes from 'prop-types';
export default class EventDemoComponent extends  React.Component
{
    constructor(props) {
        super(props);
        //this.btnOnClick = this.btnOnClick.bind(this);
        this.state = {
            isToggleOn : false
        };
        console.log('On Click from parent ',this.props.btnToggleClick)
    }
    internalMethod()
    {
        console.log('Internal method');
    }
    btnOnClick(event, id)
    {
        console.log('Btn Clicked ',id);
        /*this.setState({
            isToggleOn : !this.state.isToggleOn
        })*/
        this.setState((state)=>({
            isToggleOn: !state.isToggleOn
        }));
        this.props.btnToggleClick();
        //this.internalMethod();
    }
    render() {
        return (
            <div>
                {'Toogle '+ this.state.isToggleOn}
                <button type="button" onClick={(event)=>this.btnOnClick(event,1)}>
                    Event Demo Button
                </button>
            </div>
        );
    }
}
EventDemoComponent.propTypes = {
    btnToggleClick: PropTypes.func.isRequired
};