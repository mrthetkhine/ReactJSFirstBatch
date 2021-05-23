import React from 'react';
import {useState,useReducer} from "react";
//store
let id= 3;
const getUniqueId = () => id++;
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
        case 'update':
            console.log('Update Action ',action)
            return state.map(item=>
                item.id==action.item.id?
                    {...item,title:action.text}
                    :item);
        default:
            throw Error();
    }
}
//Action Creator
function addAction(title)
{
    let id = getUniqueId();
    return {
        type:'add',
        item:{
            title: title,
            id : id
        }
    }
}
function removeAction(item)
{
    return {
        type:'remove',
        item:item
    }
}
function updateAction(item,text)
{
    return {
        type:'update',
        item:item,
        text:text,
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