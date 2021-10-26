import React from 'react'

const small = ({value}) => {

    console.log('me llamaron de vuelta :s :( ')


    return (
        <small>
            {value}
        </small>
    )
}

export default React.memo(small)
