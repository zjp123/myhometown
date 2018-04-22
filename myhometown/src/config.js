import axios from 'axios';
// import React from 'react'
// import ReactDom from 'react-dom'

import { message } from 'antd';

// class Newmessage extends React.Component{
//     constructor(props){
//         super(props)
//         this.state= {
//             loading:false
//         }
//     }
//     componentDidMount(){
//         this.loading()
//     }
//     componentWillUnmount(){
//         this.close()
//     }
//     loading(){
//         this.setState ({
//             loading:true
//         })
//     }
//     close(){
//         this.setState ({
//             loading:false
//         })
//     }
//     render(){
//         const dispalyNone = {
//             dispaly:'none',
//             width:'500px',
//             height:'300px',
//             textAlign:'center',
//             lineHeight:'300px',
//             border:'1px solid #ddd',
//             boxShadow:'box-shadow:-3px 0 3px #95c1cb, 2px 0 2px #95c1cb, 0 -2px 2px #95c1cb, 0 3px 3px #95c1cb',
            
//         }
//         const dispalyBlock = {
//             dispaly:'block',
//             width:'500px',
//             height:'300px',
//             textAlign:'center',
//             lineHeight:'300px',
//             border:'1px solid #ddd',
//             boxShadow:'box-shadow:-3px 0 3px #95c1cb, 2px 0 2px #95c1cb, 0 -2px 2px #95c1cb, 0 3px 3px #95c1cb',
            
//         }
//         return(

//             <div className="globalMessage" style={this.state.loading===true?dispalyBlock:dispalyNone}>
//                 Loading...
//             </div>
//         )
//     }
// }

// ReactDom.render(
//     <Newmessage/>
//     ,document.getElementById('root')
// )
// const mes = new Newmessage()
message.config({
    top: 200,
    duration: 0,
});
axios.interceptors.request.use(function(req){
   
    message.loading('Loading...');
    return req;
})
axios.interceptors.response.use(function(res){
    message.destroy()
    return res;
})