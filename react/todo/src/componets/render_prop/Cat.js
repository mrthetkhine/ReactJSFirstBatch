import React from 'react';
class Cat extends React.Component
{
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="../../assets/images/cat.jpeg"
                 width={5}
                 height={5}
                 alt={"Image display here"}
                 style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}
export default Cat;