import React from 'react'
import {Link} from 'react-router-dom'
import '../reset.less'
import {Redirect} from 'react-router-dom'
import './header.less'
import {connect} from 'react-redux'
import browserCookie from 'browser-cookies'
import {logoout} from '../../container/redux/user.redux'
import {Modal,Button} from 'antd'


class OutModal extends React.Component {
    // state = { visible: false }
   
    render() {
      return (
        <div>
          
          <Modal
            title="提示"
            visible={this.props.visible}
            onOk={this.props.handleOk}
            onCancel={this.props.handleCancel}
          >
            <p>确定退出？</p>
            
          </Modal>
        </div>
      );
    }
  }

class Header extends React.Component{
   
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.logoout = this.logoout.bind(this)
        this.state = { visible: false }
        
    }
    register(){
        this.props.history.push('/register')
    }
    login(){
        console.log(this.props)
        this.props.history.push('/login')
        
    }
    logoout(){
        this.setState({
            visible:true
        })
        
        
    }
    
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        browserCookie.erase('userid')
        browserCookie.erase('username')
        browserCookie.erase('avatar')
        this.props.logoout()
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render(){
        const cookieusername = browserCookie.get('usernae')
        const cookieavatar = browserCookie.get('avatar')
        const cookieuserid = browserCookie.get('userid')
        let rout;
        if(!this.props.location){
            rout = '';
        }else{
            rout = this.props.location.pathname;
        };
        
        const {avatar,userName,redurl} = this.props.user;

      
        
        const header = (
            <header>
            {(redurl&&(redurl!=='/')&&(rout!=='/login'))? <Redirect to={redurl}/>:null}
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
                    cookieavatar===null?(
                        <div key="login" id="loginWrap">
                            <span id="login" onClick={this.login}>登录</span>
                            <span id="register" onClick={this.register}>注册</span>
                            
                        </div>
                    ):(
                        <div key="touxiang" id="touxiang-logout-Wrap" >
                            <img id="touxiang" alt="头像" src={require(`../../imgs/${cookieavatar}`)}/>
                            <span id="zhanghu" >{`欢迎,${cookieusername}`}</span>
                            
                            <span id="logoout" onClick={this.logoout}>退出登录</span>
                            
                        </div>
                    )
                }
                <OutModal 
                visible={this.state.visible}
                handleCancel={this.handleCancel}
                handleOk={this.handleOk}
                showModal={this.showModal}
                />
            </nav>
        </header>
        );
        
		return !redurl?(
			header
			
		):((rout==='/login')?header:header )
	}
}

const propsToState = (state=>state)
const propsToprops = {logoout}

export default connect(propsToState,propsToprops)(Header)