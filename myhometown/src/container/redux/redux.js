import {REGISTER} from '../action/action'


const initState = {
    isLogin:false,
    userName:'',
    avatar:'',
    isOnLine:false
}

export function registerSer(state = initState,action){

     switch (action.type) {
         case REGISTER:
             return {...state,isLogin:true}
             
         default:
             return state
            
     }

}



