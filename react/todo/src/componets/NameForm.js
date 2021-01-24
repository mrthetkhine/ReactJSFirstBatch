import React from "react";
export default class NameForm extends  React.Component
{
    constructor(props) {
        super(props);
        this.state ={
            name: 'Hello',
            address: '',
            gender: 'Male',
            isGoing : false
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        /*
        this.handleNameOnChange = this.handleNameOnChange.bind(this);
        this.handleAddressOnChange = this.handleAddressOnChange.bind(this);
        this.handleGenderOnChange = this.handleGenderOnChange.bind(this);

         */
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleInputOnChange(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ?target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] :value
        })
    }
    /*
    handleNameOnChange(event)
    {
        //console.log('Event ',event.target.value);
        this.setState({
            name : event.target.value
        })
    }
    handleAddressOnChange(event)
    {
        //console.log('Event ',event.target.value);
        this.setState({
            address : event.target.value
        })
    }
    handleGenderOnChange(event)
    {
        this.setState({
            gender : event.target.value
        })
    }*/
    handleOnSubmit(event)
    {
        let json = {...this.state};
        console.log("Json ",json);
        event.preventDefault();
    }
    renderNameAndAddress() {
        return <>
            <label>
                Name:
                <input type="text" name="name"
                       value={this.state.name}
                       onChange={this.handleInputOnChange}/>
            </label>
            <br/>
            <label>
                Address:
                <textarea name="address"
                          value={this.state.address}
                          onChange={this.handleInputOnChange}/>
            </label>
            <br/>
        </>;
    }
    render() {
        console.log('Render');
        return(
            <form onSubmit={this.handleOnSubmit}>
                {this.renderNameAndAddress()}
                <label>
                    Gender:
                    <select name="gender"
                            value={this.state.gender}
                            onChange={this.handleInputOnChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <br/>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputOnChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }


}