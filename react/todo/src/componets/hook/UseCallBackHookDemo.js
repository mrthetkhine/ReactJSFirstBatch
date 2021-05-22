import React, {useEffect, useState,useCallback} from 'react';

export default function UseCallBackDemo()
{
    const [count,setCount] = useState(0);

    const inc = useCallback(()=>{
        console.log("Count have been changed");
        setCount(count+1)
    },[count])
    return(
        <div>
            <button onClick={()=>{
                inc()
            }}>
                Counter {count}
            </button>
        </div>
    )
}