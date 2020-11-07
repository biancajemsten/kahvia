import { Typography, Row, Col } from "antd";
import "./DeliverySummary.scss";

export function DeliverySummary({
  title,
  nextScheduledDelivery,
  orderFrequency
}) {
  return (
    <div className="c-delivery-summary">
      <Typography.Title className="c-delivery-summary__title">
        {title}
      </Typography.Title>
      <hr />
      <Row className="c-delivery-summary__row">
        <Col span={16}>
          <Typography.Text>Next scheduled delivery</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>{nextScheduledDelivery}</Typography.Text>
        </Col>
      </Row>
      <Row className="c-delivery-summary__row">
        <Col span={16}>
          <Typography.Text>Order frequency</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>{orderFrequency}</Typography.Text>
        </Col>
      </Row>
    </div>
  );
}
