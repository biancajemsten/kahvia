import { Col, Row } from "antd";
import {DeliverySummary} from "../components/DeliverySumamry";
import {DeliveryScheduler} from "../components/DeliveryScheduler";
import { TextBox } from "../components/TextBox";
const summaryProps = {
    title: "Helsinki Cafe",
    nextScheduledDelivery: "Nov 15, 10am-12pm",
    orderFrequency: "Weekly"
  };

const textBoxProps = {
  textValue : 'Pssst... Did you know, scheduling joint deliveries with another local vendor not only saves you money but is also great for the environment!'
}

export default function DeliverySchedule() {
  return (
    <div className="c-delivery__container">
        <Row>
            <Col span={8} offset={8}>
                <DeliverySummary {...summaryProps}/>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
              <DeliveryScheduler/>

         
            </Col>
        </Row>
        <Row>
          <Col span={12}>
              <TextBox {...textBoxProps}/>
            </Col>
          </Row>
    </div>
  );
}
