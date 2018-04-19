import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import {Provider,store} from 'react-redux'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './component/header/header'

function Maincontent(){
    return <h1>这是页面主体</h1>
}
// function Header(){
//     return <h1>这是页面头部</h1>
// }
function Footer(){
    return <h1>这是页面底部</h1>
}
ReactDOM.render(
    // <Provider>
        <BrowserRouter>
            <div>
                <Route path="/:location" component={Header}></Route>
                <Switch>
                    
                    <Route path="/:location" component={Maincontent}></Route>
                    
                    
                
                </Switch>
                <Route path="/:location" component={Footer}></Route>
            </div>
        </BrowserRouter>
    // </Provider>
    ,document.getElementById('root')
)