import React from 'react';
import Cat from './Cat';
class MouseWithCat extends React.Component
{
    constructor(props) {
        super(props);
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
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
                <Cat mouse={this.state}/>
            </div>
        );
    }
}
export default MouseWithCat;