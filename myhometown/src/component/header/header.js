import React from 'react'
import {Link} from 'react-router-dom'
import '../reset.less'
import {Redirect} from 'react-router-dom'
import './header.less'
import {connect} from 'react-redux'
import {logoout} from '../../container/redux/user.redux'

class Header extends React.Component{
   
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.logoout = this.logoout.bind(this)
        
    }
    register(){
        this.props.history.push('/register')
    }
    login(){
        this.props.history.push('/login')
        
    }
    logoout(){
        this.props.logoout()
        
    }
    render(){
        const {avatar,userName,redurl} = this.props.user;
        console.log(this.props.user)
		return !redurl?(
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
                   
                    {
                        avatar===''?(
                            <div key="login" id="loginWrap">
                                <span id="login" onClick={this.login}>登录</span>
                                <span id="register" onClick={this.register}>注册</span>
                                
                            </div>
                        ):(
                            <div key="touxiang" id="touxiang-logout-Wrap" >
                                <img id="touxiang" alt="头像" src={require(`../../imgs/${avatar}`)}/>
                                <span id="zhanghu" >{`欢迎,${userName}`}</span>
                                
                                <span id="logoout" onClick={this.logoout}>退出登录</span>
                                
                            </div>
                        )
                    }
                    
                </nav>
			</header>
			
		):<Redirect to={redurl} />
	}
}

const propsToState = (state=>state)
const propsToprops = {logoout}

export default connect(propsToState,propsToprops)(Header)