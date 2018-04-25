
import {REGISTERERR,REGISTERSUCC,LOGINSUCC,LOGINERR,LOGOOUT} from '../action/action'
import axios from 'axios'
import { message } from 'antd';
message.config({
    top: 200,
   
});

const initState = {
    isLogin:false,
    userName:'',
    avatar:'',
    isOnLine:false,
    
}

export function user(state = initState,action){
    // console.log(action.payload)
     switch (action.type) {
        case REGISTERSUCC:
             return {...state,isLogin:true,...action.payload,nowTime:new Date().getTime()}
        case REGISTERERR:
             return {...state,isLogin:false,...action.payload,nowTime:new Date().getTime()}
        case LOGINSUCC:
             return {...state,isLogin:true,isOnLine:true,...action.payload,nowTime:new Date().getTime()}
        case LOGINERR:
             return {...state,isLogin:false,isOnLine:false,...action.payload,nowTime:new Date().getTime()}
        case LOGOOUT:
             return {...initState,redurl:'/login'}  //此时state会自动保存当前的最新状态，并不是初始化状态，所以要用，
         default:
             return state
            
     }

}
function registerSucc(payload){
    return {type:REGISTERSUCC,payload}
}

function registerErro(payload){
    return {type:REGISTERERR,payload}
}
export function register(data){
    const {pwd,repeatPwd} = data
    if(pwd!== repeatPwd){
        return registerErro('密码请保持一致')
    }
    return dispatch=>{
        axios.post('/user/register',data)
        .then(res=>{
            // console.log(res)
            if(res.data.code==200){
                dispatch(registerSucc(res.data.data)); 
            }else{
                // console.log(res.data)
                dispatch(registerErro(res.data.data)); 
                
            }
        }).catch(e=>{
            message.error('服务端发生异常',3)
        })
    }

}

function loginSucc(payload){
    return {type:LOGINSUCC,payload}
}

function loginErro(payload){
    return {type:LOGINERR,payload}
}
export function login(data){
  
    return dispatch=>{
        axios.post('/user/login',data)
        .then(res=>{
            // console.log(res)
            if(res.data.code==200){
                dispatch(loginSucc(res.data.data)); 
            }else{
                // console.log(res.data)
                dispatch(loginErro(res.data.data)); 
                
            }
        }).catch(e=>{
            message.error('服务端发生异常',3)
        })
    }

}

export function logoout(){
    return dispatch=>{
        dispatch({type:LOGOOUT}); 
        
    }
  
  }



