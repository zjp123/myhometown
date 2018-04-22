import React from 'react'

import { Card, Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './show.less'

const { Meta } = Card;

class Showtechan extends React.Component{
    constructor(props){
        super(props)
        this.state={
            techanArr:[
                {key:'柳编',value:require('../../imgs/liubian.jpg'),desc:'中国柳编之乡'},
                {key:'板鸭',value:require('../../imgs/banya.jpg'),desc:'安徽十大特产美食'},
                {key:'湿地公园',value:require('../../imgs/shidi.jpg'),desc:'千里淮河'},
            ]
        }
    }

    render(){

        
        
        
        return (
            <div style={{  padding: '30px',paddingRight:'15px' }}>
                <Row className="cardWrap">
                    <QueueAnim delay={300} >
                     {/* <div className="cardWrap"> */}
                    {
                        this.state.techanArr.map(v=>(
                            
                                <Col key={v.key} span={6} style={{textAlign:'center'}}>
                                    <Card title={v.key} bordered={false} key={v.key}
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={v.key} style={{height:'160px'}} src={v.value} />}
                                    >
                                    <Meta
                                        title={v.key}
                                        description={v.desc}
                                        />
                                    </Card>
                                </Col>

                        ))
                    }
                    {/* </div> */}
                    </QueueAnim>
                </Row>
            </div>
        )
    }
}

export default Showtechan