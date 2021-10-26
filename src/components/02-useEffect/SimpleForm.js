import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message';

const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    const { name, email } = form;


    useEffect(() => {
        // console.log('hey!')
    }, [])
    useEffect(() => {
        // console.log('esta cambiando el formulario!')
    }, [form])                                                          //este escucha al FORM, y solo se ejecuta si cambia el FORM
    useEffect(() => {
        // console.log('esta cambiando el nombre!')
    }, [name])

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value,
            [target.email]: target.value
        })
    }

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <div className='form-group'></div>
            <input
                text='text'
                name='name'
                className='form-control'
                placeholder='Paulo'
                autoComplete='off'
                value={name}
                onChange={ handleInputChange }
            ></input>
            <input
                text='text'
                name='email'
                className='form-control'
                placeholder='mail@email.com'
                autoComplete='off'
                value={email}
                onChange={ handleInputChange }
            ></input>

            {(name === 'Paulo') && <Message />}

        </>
    )
}

export default SimpleForm
