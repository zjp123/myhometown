

import React from 'react'
import {Layout, Form, Icon, Input, Button,Alert } from 'antd'
import Showtechan from '../../component/showTechan/showtechan'
import {connect} from 'react-redux'
import {register} from '../redux/user.redux'
import './register.less'


const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            regclick:false
        }
    }
    // login(){
        
    //   this.props.history.push('/login');
    // }
    // usernameChange(key,v){
    //     this.setState({
    //         [key]:v
    //     })
    //     console.log(this.state)
        
    // }
    // pwdChange(key,v){
    //     this.setState({
    //         [key]:v
    //     })
    //     console.log(this.state)
        
    // }
    // reppwdChange(key,v){
    //     this.setState({
    //         [key]:v
    //     })
    //     console.log(this.state)
        
    // }
    // componentWillReceiveProps(){
    //     this.setState({
    //         regclick:true
    //     });
    // }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(this.props.register)
        this.props.register(values) 
        return ;
      }else{
        return ;
        
      }
    });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('pwd')) {
      callback('两次密码输入请保持一致!');
    } else {
      callback();
    }
  }
  render() {
     
    const { getFieldDecorator } = this.props.form;
    const {msg,nowTime} = this.props.state;
    let regclick = this.state.regclick;
    console.log(msg)
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="账号" 
            refs="userName" 
            // onChange={v=>this.usernameChange('userName',v)}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('pwd', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" refs="pwd" 
            placeholder="密码" 
            // onChange={v=>this.pwdChange('pwd',v)}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('repeatPwd', {
            rules: [{ required: true, message: 'Please input your Password!' },
             {
                validator: this.compareToFirstPassword,
              }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" refs="repeatPwd" 
            placeholder="确认密码"
            // onChange={v=>this.reppwdChange('repeatPwd',v)}
             />
          )}
        </FormItem>
        <FormItem>
         
          <Button type="primary" htmlType="submit"  className="login-form-button">
            注册
          </Button>
          {/* <Button type="primary" onClick={this.login} style={{marginTop:'10px'}} className="login-form-button">
            登录
          </Button> */}
          {/* <Alert className={((msg!==undefined&&regclick)?'registerSucc-animal':'registerSucc')} key={nowTime}  message={msg} type="success" /> */}
        </FormItem>
      </Form>
    );
  }
}

const WrapLoginForm = Form.create()(LoginForm);


class Register extends React.Component{


    render(){

        return(
            <div style={{background: '#f0f2f5',overflow:'hidden'}}>
               
                <Layout className="layout-left" >
                    <Showtechan/>          
                </Layout>
                <Layout className="layout-right" >

                        <WrapLoginForm register={this.props.register} state={this.props.user}/>
                </Layout>
                
            </div>
        )
    }
}

const propsToState = (state=>state)
const propsTodispatch = {register}
export default connect(propsToState,propsTodispatch)(Register)