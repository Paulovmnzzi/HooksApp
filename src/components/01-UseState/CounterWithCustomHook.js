import React from 'react'
import useCounter from '../../hooks/useCounter'
import './Counter.css'
const CounterWithCustomHook = () => {

    const {state:counter , increment, decrement } = useCounter();


    return (
        <>
            <h1>Counter with Hook: {counter} </h1>   
            <hr />
            <button className='btn btn-primary' onClick={() => increment(1)}>+1</button>
            <button className='btn btn-success' onClick={() => decrement(2)}>-1</button>
            <hr />
        </>
    )
}

export default CounterWithCustomHook
