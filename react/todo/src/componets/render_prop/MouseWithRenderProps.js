import React from 'react';
class MouseWithRenderProps extends React.Component
{
    constructor(props) {
        super(props);
        //console.log('MouseWithRenderProps.props ',this.props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        //console.log('This.props ',this.props);
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {this.props.render(this.state)}
            </div>
        );
    }
}
export default MouseWithRenderProps;