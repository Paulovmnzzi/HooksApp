import React from 'react'

const TodoItem = ({ todo, i, handleDelete, handleToogle }) => {
    return (
        <>
            <li
                key={todo.id}
                className='list-group-item'
            >
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToogle(todo.id)}
                >{i + 1}. {todo.desc} </p>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(todo.id)}
                >Delete</button>
            </li>
        </>
    )
}

export default React.memo(TodoItem)
