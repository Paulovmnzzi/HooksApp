import React, { useState } from 'react'
import MultipleCustomHooks from '../03-Examples/MultipleCustomHooks'
import '../02-useEffect/effects.css'
const RealExampleRef = () => {

    const [show, setShow] = useState(false)



    return (
        <div>
            <h1>Real example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks />}

        <button
            className='btn btn-success mt-10 me-5'
            onClick={ () => setShow(!show)}
        >Show/Hide</button>



        </div>
    )
}

export default RealExampleRef