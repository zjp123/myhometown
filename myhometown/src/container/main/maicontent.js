import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import './maincontent.less'

import {connect} from 'react-redux'
// import Auth from '../auth/auth'
class Maincontent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                login:false
            }
        }
         componentDidMount(){
             console.log(333)
            this.setState({
                login:true
            })
         }
        render(){
            
            return (
                <div>
                    <Header/>
                    
                    <section id="mianContent">
                        这是页面主体
                    </section>
                    
                    <Footer/>
                </div>
                
                
            )
        }
    }
    
    const stateToProps = state=>state
    export default connect(stateToProps)(Maincontent)