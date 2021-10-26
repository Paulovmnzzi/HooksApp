import React from 'react'
import useForm from '../../hooks/useForm';
import './effects.css'

const FormWithCustomHook = () => {

    const types = {
        NAME: 'name',
        EMAIL: 'email',
        PASS: 'password'
    }

    const [values, handleInputChange] = useForm({
        [types.NAME]: '',
        [types.EMAIL]: '',
        [types.PASS]: ''
    })

    const { name, email, password } = values;



    return (
        <>
            <h1>Form with custom Hook</h1>
            <hr />

            <div className='form-group'></div>
            <input
                text='text'
                name={types.NAME}
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
            <input
                type='password'
                text='password'
                name={[types.PASS]}
                className='form-control'
                placeholder='*******'
                value={password}
                onChange={ handleInputChange }
            ></input>

        </>
    )
}

export default FormWithCustomHook
