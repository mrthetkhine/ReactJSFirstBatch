import React from 'react';
import {useState,useReducer} from "react";
//store
const todoState = [
    {
        id:1,
        title : 'Item One'
    },
    {
        id:2,
        title : 'Item Two'
    }
];

function reducer(state,action)
{
    console.log('Reducer ',action);
    switch (action.type) {
        case 'add':
            const newState = [...state,action.item];
            console.log('Add ',newState);
            return newState;
        case 'remove':
            return state.filter(item=>item.id!=action.item.id);
        default:
            throw Error();
    }
}

export default function ToDoList()
{
    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, todoState);
    console.log('State ',state);
    return(
        <div>
            <div className="AddTodo">
                <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
                <button className="AddTodoButton" onClick={()=>dispatch({
                    type:'add',
                    item:{
                        title : text
                    }
                })}>Add</button>
            </div>
            <div>
                {
                    state.map(item=>(
                        <ToDo
                            item={item}
                            key = {item.id}
                            remove={()=>{
                                dispatch({
                                    type:'remove',
                                    item:item
                                })
                            }}
                        ></ToDo>
                    ))
                }
            </div>
        </div>
    );
}
function ToDo({item,remove})
{
    return(
        <div>
            {item.title} <button onClick={()=>remove()}>Remove</button>
        </div>
    )
}