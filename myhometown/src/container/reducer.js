
import {registerSer} from '../container/redux/redux'
import {combineReducers} from 'redux'; //合并reduce
export default combineReducers({
    user:registerSer
 });