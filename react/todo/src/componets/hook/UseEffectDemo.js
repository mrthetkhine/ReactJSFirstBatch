import React, { useState, useEffect } from 'react';
const useDocumentTitle = title=>{
    useEffect(()=>{
        document.title = title;
    },[])
}
export default function UseEffectDemo()
{
    const [count,setCount] = useState(0);
    const [secondCounter, setSecondCounter] = useState(5);

    useDocumentTitle(`You clicked ${count} times`);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>
                Click me
            </button>

            <button onClick={()=>setSecondCounter(secondCounter+1)}>
                Click Me Second {secondCounter}
            </button>
        </div>
    )
}