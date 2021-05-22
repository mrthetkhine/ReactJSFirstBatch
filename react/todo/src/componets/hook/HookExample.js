import React, {useState} from 'react';

export  default function HookExample() {

    const [count,setCount] =useState(0);
    const [secondCounter, setSecondCounter] = useState(5);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click Me
            </button>
            {/*
             setState({
            secondCounter: this.state.secondCounter+1
                })
             */
            }
            <button onClick={()=>setSecondCounter(secondCounter+1)}>
                Click Me Second {secondCounter}
            </button>
        </div>
    )
}