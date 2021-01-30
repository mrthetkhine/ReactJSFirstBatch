import React from "react";
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
export default class CustomTextInput extends React.Component
{
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.ref = React.createRef();
    }
    focusTextInput() {
        console.log('Text input ',this.textInput.current);
        this.textInput.current.focus();
        console.log('Function component Ref ',this.ref);
    }
    render() {

        return(
            <div>

                <input
                    type="text"
                    ref={this.textInput}/>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <FancyButton ref={this.ref}>
                    Click Me
                </FancyButton>
            </div>
        );
    }
}