import React from 'react'
import {Link} from 'react-router-dom'
import '../reset.less'

import './header.less'

class Header extends React.Component{
   
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    login(){
        this.props.history.push('/login')
        
    }
    render(){
		
		return (
			<header>
				<nav className="nav">
                    <div key="shouye">
                        <Link to='/'>
                            <img id='logo' alt="logo" src={require('../../imgs/logo.png')}/>
                        </Link>
                        
                    </div>
                    <div key="techan">
                        <Link to='/techan'>特产</Link>
                    </div>
                    <div key="fengjing">
                        <Link to='/fengjing'>风景</Link>
                    </div>
                    <div key="renqing">
                        <Link to='/renqing'>人情</Link>
                    </div>
                    <div key="jiaxiangshi">
                        <Link to='/xiangshi'>乡事</Link>
                    </div>
                    <div key="login" id="loginWrap">
                        <span id="login" onClick={this.login}>登录</span>
                        <span id="register" onClick={this.register}>注册</span>
                        
                    </div>
                </nav>
			</header>
			
		)
	}
}

export default Header