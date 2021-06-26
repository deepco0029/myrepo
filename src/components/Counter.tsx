import React, { useReducer, useState } from "react";

type CounterProps = {
    onIncr() : void,
    onDecr() : void
}

function reducer (state:any, action:any) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0)
    // const [number, setBanana] = useState(0)
    const [msg, setMsg] = useState('wait')
    const onIncr = () => {
        dispatch({type:'INCREMENT'})
        setMsg('upupupup')
    }
    const onDecr = () => {
        dispatch({type:'DECREMENT'})
        setMsg('dndndndn')
    }
    const reset = () => {
        // setBanana(0)
        setMsg('초기화 되었다')
    }
    return (
        <>
            <h1>{number}</h1>
            <h1>{msg}</h1>
            <button onClick={ onIncr }>+1</button>
            <button onClick={onDecr}>-1</button>
            <button onClick={ reset }>리셋</button>
        </>
    )
}

export default Counter