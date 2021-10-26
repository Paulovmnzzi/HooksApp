import React, { useContext } from 'react'
import userContext from './UserContext'


const LoginScreen = () => {

    const { setUser } = useContext(userContext);

 
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    name:'Paulo',
                    id: new Date().getTime()
                }) }
            
            >Login</button>




        </div>
    )
}

export default LoginScreen
