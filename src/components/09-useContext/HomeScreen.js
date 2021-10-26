import React, { useContext } from 'react'
import userContext from './UserContext'


const HomeScreen = () => {

    const {user} = useContext(userContext)
    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre className='mx-5'>
                { JSON.stringify(user, null, 3) }
            </pre>

        </div>
    )
}

export default HomeScreen
