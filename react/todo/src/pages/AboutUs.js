import React from 'react';

export default function AboutUs(props)
{
    console.log("Props ",props.match.params.id);
    let id = props.match.params.id;
    return(
        <div>
            <h1>About us id {id} Page</h1>
            <button className="btn btn-primary" onClick={() => props.history.push('/') }>Go to Main</button>
        </div>
    );

}