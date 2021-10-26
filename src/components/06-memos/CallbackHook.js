import React, { useCallback, useState } from 'react'

import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (num) => {
            setCounter(count => count + num)
        },
        [setCounter], //si pongo como dependencia counter, cada vez que cambie volvería a renderizar todo 
    )



    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>

            <ShowIncrement incrementar={increment}/>
        </div>
    )
}

export default CallbackHook