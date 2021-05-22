import React, { useState, useEffect } from 'react';

export default function UseEffectDemo()
{
    const [count,setCount] = useState(0);
    const [secondCounter, setSecondCounter] = useState(5);

    useEffect(()=>{
        console.log("After render");
        document.title = `You clicked ${count} times`
    },[count]);
    
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