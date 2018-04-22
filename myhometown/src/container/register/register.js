

import React from 'react'
import {Layout, Form, Icon, Input, Button} from 'antd'
import Showtechan from '../../component/showTechan/showtechan'
import './register.less'


const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            pwd:'',
            repeatPwd:''
        }
        this.usernameChange= this.usernameChange.bind(this)
        this.pwdChange= this.pwdChange.bind(this)
        this.reppwdChange= this.reppwdChange.bind(this)
    }
    usernameChange(key,v){
        this.setState({
            [key]:v
        })
    }
    pwdChange(key,v){
        this.setState({
            [key]:v
        })
    }
    reppwdChange(key,v){
        this.setState({
            [key]:v
        })
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        return ;
      }else{
          
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="账号" 
            onValuesChange={v=>this.usernameChange('userName',v)}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" refs="pwd" 
            placeholder="密码" 
            onValuesChange={v=>this.pwdChange('pwd',v)}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" refs="repeatPwd" 
            placeholder="确认密码"
            onValuesChange={v=>this.reppwdChange('repeatPwd',v)}
             />
          )}
        </FormItem>
        <FormItem>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>

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
                        <WrapLoginForm/>
                </Layout>
                
            </div>
        )
    }
}


export default Register