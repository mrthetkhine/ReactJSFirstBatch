import React from 'react';
import {useState,useReducer} from "react";
import {addAction,removeAction,updateAction} from "./Actions";
import {todoState,reducer} from "./Reducer";
//store
export default function ToDoList()
{
    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, todoState);
    console.log('State ',state);
    return(
        <div>
            <div className="AddTodo">
                <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
                <button className="AddTodoButton" onClick={()=>dispatch(addAction(text))}>Add</button>
            </div>
            <div>
                {
                    state.map(item=>(
                        <ToDo
                            item={item}
                            key = {item.id}
                            remove={()=>{
                                dispatch(removeAction(item))
                            }}
                            update={()=>dispatch(updateAction(item,text))}
                        ></ToDo>
                    ))
                }
            </div>
        </div>
    );
}
function ToDo({item,remove,update})
{
    return(
        <div>
            {item.title} <button onClick={()=>remove()}>Remove</button>
            <button onClick={()=>update()}>Update</button>
        </div>
    )
}