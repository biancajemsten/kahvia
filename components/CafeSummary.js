import { Typography, Row, Col } from "antd";
import "./CafeSummary.scss";

export function CafeSummary() {
  return (
    <div className="c-cafe-summary">
      <Typography.Title className="c-cafe-summary__title">
        Helsinki Cafe
      </Typography.Title>
      <hr />
      <Row className="c-cafe-summary__row">
        <Col span={16}>
          <Typography.Text>Next scheduled delivery</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>Nov 15</Typography.Text>
        </Col>
      </Row>
      <Row className="c-cafe-summary__row">
        <Col span={16}>
          <Typography.Text>Most purchased product</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>Juhla Mokha</Typography.Text>
        </Col>
      </Row>
      <Row className="c-cafe-summary__row">
        <Col span={16}>
          <Typography.Text>Order frequency</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>Weekly</Typography.Text>
        </Col>
      </Row>
    </div>
  );
}
