import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDelete, handleToogle, }) => {
    return (
            <div className='col-7'>
                <ul className='list-group list-group-flush'>
                    {
                        todos.map((todo, i) => (
                            <>
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                i={i}
                                handleDelete={handleDelete}
                                handleToogle={handleToogle}
                            />
                           </>
                        ))
                    }
                </ul>
            </div>
    )
}

export default React.memo(TodoList)
