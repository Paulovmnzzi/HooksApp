import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'

import './styles.css'
import useForm from '../../hooks/useForm'
import TodoList from './components/TodoList'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
    //si JSON.parse(etc) regresa null entonces regresa un arreglo vacio

}


const Todoapp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToogle = (todoId) => {

        dispatch({
            type: 'toogle',
            payload: todoId
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newToDo
        }
        dispatch(action);
        reset();

    }

    return (
        <div>
            <h1> TodoApp ( {todos.length} )</h1>
            <hr />
            <div className='row'>
                <TodoList
                    todos={todos}
                    handleToogle={handleToogle}
                    handleDelete={handleDelete}
                />
                <div className='col-5'>
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='aprender..'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={description}
                        ></input>
                        <button
                            type='submit'
                            className='btn btn-outline-success mt-1 btn-block'
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todoapp
