import { Typography, Row, Col } from "antd";
import deliverySchedule from '../data/deliverySchedule'
import { Button } from 'antd';
const { Text } = Typography;
import './OtherDeliveries.scss';


export function OtherDeliveries({
    date,
    chosenTime
}) {
    const deliveries = deliverySchedule(date).deliverySchedule
    
    if(chosenTime)
    return(
        deliveries.map((item) =>  item.time === chosenTime && (
     
            <div className="c-other-deliveries">
            <Row className="c-other-deliveries__row">
                <Col span={7}>
               <Row><Text>{item.customerName}, {item.city}</Text></Row> 
               <Row> <Text>{item.date}</Text></Row>
               <Row> <Text>{item.time}</Text></Row>
                </Col>
                <Col offset={1} span={6}>
                <Button type="primary">Join this delivery</Button>
                </Col>
                <Col offset={1}span={7}>
                <Button type="primary">Stay with my own delivery</Button>
                </Col>
            </Row>
        </div> 
        ))
    )
    else
    return(
     deliveries.map((item) => (
     
            <div className="c-other-deliveries">
          <Row className="c-other-deliveries__row">
                <Col span={7}>
               <Row><Text>{item.customerName}, {item.city}</Text></Row> 
               <Row> <Text>{item.date}</Text></Row>
               <Row> <Text>{item.time}</Text></Row>
                </Col>
                <Col offset={1} span={6}>
                <Button type="primary">Join this delivery</Button>
                </Col>
                <Col offset={1}span={7}>
                <Button type="primary">Stay with my own delivery</Button>
                </Col>
            </Row>
        </div> 
     )      
 ));      
}
