import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
// import Auth from '../auth/auth'
class Maincontent extends React.Component{
    
         constructor(props){
             super(props);
             this.state = {
                 login:false
             }
         }
    
        render(){
            
            return (
                <div>
                    <Header/>
                    {/* <Auth/> */}
                    {`这是页面主体`}
                    <Footer/>
                </div>
                
                
            )
        }
    }
    
    
    export default Maincontent