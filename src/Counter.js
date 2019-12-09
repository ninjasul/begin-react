import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.diff;
        case 'DECREMENT':
            return state - action.diff;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
       dispatch({
           type: 'INCREMENT',
           diff: 5
       })
    };
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT',
            diff: 5
        })
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+5</button>
            <button onClick={onDecrease}>-5</button>
        </div>
    )
}

export default Counter;