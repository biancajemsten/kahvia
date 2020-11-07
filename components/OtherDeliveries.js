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
        deliveries.map((item) =>  item.time === chosenTime ? (
     
            <div className="c-other-deliveries">
            <Row>
                <Col span={7}>
               <Row><Text>{item.customerName}</Text></Row> 
               <Row> <Text>{item.date}</Text></Row>
                </Col>
                <Col span={8}>
                <Button type="primary">Join this delivery</Button>
                </Col>
                <Col span={9}>
                <Button type="primary">Stay with my own delivery</Button>
                </Col>
            </Row>
        </div> 
        ) : 
        <div className="c-other-deliveries">
            <Row>
               <Text>No other deliveries within your timeslot, please pick another time.</Text>
            </Row>
        </div> 
        )
    );
    else
    return(
     deliveries.map((item) => (
     
            <div className="c-other-deliveries">
            <Row className="c-other-deliveries__row">
                <Text>{item.customerName}</Text>
            </Row>
            <Row class="c-other-deliveries__row">
                <Text>{item.date}</Text>
            </Row>
        </div> 
     )      
 ));      
}
