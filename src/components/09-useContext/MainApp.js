import React, {useState} from 'react'
import AppRouter from './AppRouter'
import userContext from './UserContext'


const MainApp = () => {

    const [user, setUser] = useState({
    })

    console.log(user);

    return (
        <userContext.Provider value={{user, setUser}}>

            <AppRouter />

        </userContext.Provider>
    )
}

export default MainApp
