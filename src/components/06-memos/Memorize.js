import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import Small from './Small'
const Memorize = () => {

    const {counter, increment} = useCounter(0);

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Counter <Small value={counter}></Small></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={increment}
            >Inkrementh</button>
            <button
                className='btn btn-success'
                onClick={() => setShow(!show)}
            >Show/Hide {JSON.stringify(show)} </button>
        </div>
    )
}

export default Memorize
