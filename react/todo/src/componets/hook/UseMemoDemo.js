import React, {useEffect, useState,useMemo} from 'react';
export default function  UseMemoDemo()
{
    const factorial = (n) => {
        console.log("Compute ",n);
        if (n < 0) {
            return -1;
        }

        if (n === 0) {
            return 1;
        }

        return n * factorial(n - 1);
    };
    const [counter, setCounter] = useState(1);
    const result = useMemo(()=> factorial(counter), [counter]);

    return (

        <div>
            <div>Factorial of {counter} is: {result}</div>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter+ 0)}>Neutral</button>
            </div>
        </div>
    )

}