import React from 'react'
import {Link} from 'react-router-dom'
import '../reset.less'

import './header.less'

class Header extends React.Component{
   

    render(){
		
		return (
			<div>
				<ul className="header">
                    <li>
                        <Link to='/'>张白台</Link>
                    </li>
                    <li>
                        <Link to='/fengjing'>风景</Link>
                    </li>
                    
                </ul>
			</div>
			
		)
	}
}

export default Header