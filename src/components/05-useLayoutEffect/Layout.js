import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);
    const { quote } = !!data && data[0]; //null -> null      !null -> true      !!null -> false 
    //basicamente lo que dice es que si NO tiene data, arroje false, pero si SI tiene data, muestre data[0];



    return (
        <>
            <h1>Breaking Bad Quotes!</h1>


            <blockquote className='blockquote text- d-inline-flex'>
                <p className='mb-0'>{quote}</p>
            </blockquote>

            <button
                className='btn btn-success d-flex'
                onClick={increment}
            >Siguiente quote</button>

        </>
    )
}

export default Layout
