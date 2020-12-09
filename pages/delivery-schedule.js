import { Col, Row } from "antd";
import { DeliverySummary } from "../components/DeliverySummary";
import { DeliveryScheduler } from "../components/DeliveryScheduler";
import { TextBox } from "../components/TextBox";
import { GoogleMaps } from "../components/GoogleMaps";

const summaryProps = {
  title: "Helsinki Cafe",
  nextScheduledDelivery: "Nov 15, 10am-12pm",
  orderFrequency: "Weekly"
};

const textBoxProps = {
  textValue:
    "Pssst... Did you know, scheduling joint deliveries with another local vendor not only saves you money but is also great for the environment!",
    textClass: 'c-dashboard__tip'
};

export default function DeliverySchedule() {
  return (
    <div className="c-delivery__container">
      <DeliverySummary {...summaryProps} />
      <Row style={{marginTop:56}}>
      
      </Row>
      <Row className="c-delivery__row">
        <Col span={24} md={11}>
          <DeliveryScheduler />
          <TextBox {...textBoxProps} />
        </Col>
        <Col span={24} md={11} className="c-delivery__map">
          <GoogleMaps />
        </Col>
      </Row>
    </div>
  );
}
