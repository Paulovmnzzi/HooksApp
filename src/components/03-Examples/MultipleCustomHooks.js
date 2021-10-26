import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);
    const { author, quote } = !!data && data[0]; //null -> null      !null -> true      !!null -> false 
                                                //basicamente lo que dice es que si NO tiene data, arroje false, pero si SI tiene data, muestre data[0];



    return (
        <>
            <h1>Breaking Bad Quotes!</h1>

            {
                loading ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    ) :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer mt-2'> {author} </footer>
                        </blockquote>
                    )
            }
            <button onClick={increment}>Siguiente quote</button>

        </>
    )
}

export default MultipleCustomHooks
