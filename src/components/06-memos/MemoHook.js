import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

const MemoHook = () => {

    const {counter, increment} = useCounter(5000);

    const [show, setShow] = useState(false)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter <small > {counter} </small></h1>
            <hr />

            <p> { memoProcesoPesado } </p>

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

export default MemoHook
