import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import Navbar from './Navbar'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>

                <Navbar />

                <Switch>
                    <Route exact path='/About' component={AboutScreen} />
                    <Route exact path='/Login' component={LoginScreen} />
                    <Route exact path='/' component={HomeScreen} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
