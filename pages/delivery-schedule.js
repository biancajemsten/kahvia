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
    "Pssst... Did you know, scheduling joint deliveries with another local vendor not only saves you money but is also great for the environment!"
};

export default function DeliverySchedule() {
  return (
    <div className="c-delivery__container">
      <DeliverySummary {...summaryProps} />
      <Row className="c-delivery__row">
        <Col span={8} offset={8}></Col>
      </Row>
      <Row className="c-delivery__row">
        <Col span={11}>
          <DeliveryScheduler />
          <TextBox {...textBoxProps} />
        </Col>
        <Col offset={2} span={11}>
          <GoogleMaps />
        </Col>
      </Row>
    </div>
  );
}
