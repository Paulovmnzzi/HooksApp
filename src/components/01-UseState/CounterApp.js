import React, { useState } from 'react';
import './Counter.css';

const CounterApp = () => {

    //Si tenemos un useState con un objeto y queremos modificar un solo objeto sin que se borren los otros
    //podemos usar el operador ...spread para esto. También podemos desestructurar en las variables que queramos para mayor comodidad. 



    const [state, setState] = useState({counter1: 0, counter2: 0, counter3: 15}); 
    const {counter1,counter2} = state;

    return (
        <>
            <h1>Counter {state.counter1} </h1>
            <h1>Counter {state.counter2} </h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={ () => setState({
                    ...state,
                    counter1: counter1+1
                }) }
            > +1 </button>
        </>
    )
}

export default CounterApp
