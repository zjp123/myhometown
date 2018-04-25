
import React from 'react'
import {Layout, Form, Icon, Input, Button,Alert} from 'antd'
import Showtechan from '../../component/showTechan/showtechan'
import {connect} from 'react-redux'
import {login} from '../redux/user.redux'


import './login.less'


const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props){
      super(props)
      this.register = this.register.bind(this)
      this.state = {
        logClick:false
      }
      
  }
  componentDidUpdate(){
    const {isOnLine} = this.props.state;
    isOnLine&&this.props.history.push('/')
  }
  // componentWillReceiveProps(){
  //   this.setState({
  //     logClick:true
  //   });
  // }
  register(){
      
    this.props.history.push('/register');
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values) 
        return ;
      }else{
        return ;
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {msg,nowTime} = this.props.state;
    let logClick = this.state.logClick;
    console.log(msg)
    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('pwd', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" refs="pwd" placeholder="密码" />
          )}
        </FormItem>
       
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <Button type="primary"  onClick={this.register} className="login-form-button">
            注册
          </Button>
          {/* <Alert className={((msg!==undefined&&logClick)?'loginSucc-animal':'loginSucc')} key={nowTime}  message={msg} type="success" /> */}

        </FormItem>
      </Form>
    );
  }
}

const WrapLoginForm = Form.create()(LoginForm);


class Login extends React.Component{


    render(){

        return(
            <div style={{background: '#f0f2f5',overflow:'hidden'}}>
               
                <Layout className="layout-left" >
                    <Showtechan/>          
                </Layout>
                <Layout className="layout-right" >
                        <WrapLoginForm history={this.props.history} login={this.props.login} state={this.props.user}/>
                </Layout>
                
            </div>
        )
    }
}


const propsToState = (state=>state)
const propsTodispatch = {login}
export default connect(propsToState,propsTodispatch)(Login)