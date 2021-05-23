import React from 'react';

//store
const initialState = {
    count : 0
}
function reducer(state,action)
{
    console.log('Reducer ',action);
    switch (action.type) {
        case 'inc':
            return {count: state.count+1};
        case 'dec':
            return {count :state.count-1};
        default:
            throw Error();
    }
}
export default function UseReducerDemo()
{
    const [state,dispatch] = React.useReducer(reducer,initialState);
    const incAction = {
        type : 'inc'
    };
    const decAction = {
        type: 'dec'
    }
    return(
        <div>
            Count {state.count}<p/>
            <button onClick={()=>dispatch(incAction)}>Inc</button>

            <button onClick={()=>dispatch(decAction)}>Dec</button>
        </div>
    );
}