import React, { useState, useEffect } from 'react';
export default function UseEffectDemo()
{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("After render");
        document.title = `You clicked ${count} times`
    });

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>
                Click me
            </button>
        </div>
    )
}