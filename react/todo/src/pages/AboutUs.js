import React from 'react';
import { BrowserRouter as Router, Route, Link, useLocation, Redirect,useHistory } from "react-router-dom";

export default function AboutUs(props)
{
    console.log("Props ",props.match.params.id);
    let id = props.match.params.id;
    let history = useHistory();
    let {pathname} = useLocation();
    return(
        <div>
            { id == 404 ? <Redirect to="/" /> : null }
            <h1>About us id {id} Page</h1>
            <button className="btn btn-primary" onClick={() => history.push('/') }>Go to Main</button>
            <h3>Path {pathname}</h3>
        </div>
    );

}