import React from "react";
export default class NameForm extends  React.Component
{
    constructor(props) {
        super(props);
        this.state ={
            name: 'Hello'
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(event)
    {
        //console.log('Event ',event.target.value);
        this.setState({
            name : event.target.value
        })
    }
    handleOnSubmit(event)
    {
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}