import React from 'react';
function Hello()
{
    const hello='Ok';
    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world! with createElement'
    );
    var text = "<script>alert('Hello')</script>"
    return(
        <div>
            {element }
            <h1>Hello{text}after
                <script>alert('Hello')</script>

            </h1>
        </div>


    );
}
export default Hello;