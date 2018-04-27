import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import browserCookie from 'browser-cookies'

import axios from 'axios'


class Auth extends React.Component{

   componentDidMount(){
    
    const userid = browserCookie.get('userid');
    if(userid){
        this.props.history.push('/')
        return ;
    }
    const pathname = this.props.location.pathname;
    if(pathname==='/login'){
        return true;
    }
    axios.get('/user/info')
      .then(response=> {
        const {code,data} = response
        if(code===200&&data.length>0){
            this.props.history.push('/login')
            return ;
        }else{
            this.props.history.push('/register')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
   }
    render(){
       
        // const login = this.props.user.isLogin;
        // const pathname = this.props.location.pathname;
    
        // if(!login){
        //     if(pathname==='/login'){
        //         return true;
        //     }
        //    return  pathname&&pathname!=='/register'? <Redirect to='/register'/>:null
           
        // }else{
        //     return ''
        // }
        return ''
        
    }
}

const mapStateToProps =(state)=>{
    return state
}


export default withRouter(connect(mapStateToProps)(Auth))

