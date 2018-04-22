import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Auth from './container/auth/auth'
import Register from './container/register/register'
import Login from './container/login/login'
import reducers from './container/reducer'

import Maincontent from './container/main/maicontent'

import './config'

let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Auth/>
                <Route path="/:location" component={Header}></Route>
                
                <Switch>
                    
                    <Route path="/" exact component={Maincontent}></Route>
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                   
                    
                
                </Switch>
                <Route path="/:location" component={Footer}></Route>
            </div>
        </BrowserRouter>
     </Provider>
    ,document.getElementById('root')
)