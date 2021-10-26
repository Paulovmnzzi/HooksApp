import React from 'react'

const ShowIncrement = ({incrementar}) => {

    console.log('Me volví a ejecutar :c')

    return (
        <button
            className= 'btn btn-primary'
            onClick={() => {incrementar(5)}}
        >
            Incrementar
        </button>
    )
}

export default React.memo(ShowIncrement)
