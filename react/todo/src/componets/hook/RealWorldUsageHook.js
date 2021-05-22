import React, {useEffect, useState} from 'react';
import {NameComponent} from "../InlineIfComponent";

export default function RealWorldUsageHook()
{
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json =>{
                console.log(json)
                setTodos(json);
            } );
    },[]);

    return (
        <div>
           <div>
               {
                   todos.map((todo,index)=>
                        <div key={index}>
                            {todo.title}
                        </div>
                           )
               }
            </div>
        </div>

    );
}