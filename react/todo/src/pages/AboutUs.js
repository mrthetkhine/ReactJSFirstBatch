import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default function AboutUs(props)
{
    console.log("Props ",props.match.params.id);
    let id = props.match.params.id;
    return(
        <div>
            { id == 404 ? <Redirect to="/" /> : null }
            <h1>About us id {id} Page</h1>
            <button className="btn btn-primary" onClick={() => props.history.push('/') }>Go to Main</button>
        </div>
    );

}