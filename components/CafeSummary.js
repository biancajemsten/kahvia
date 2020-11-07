import { Typography, Row, Col } from "antd";
import "./CafeSummary.scss";

export function CafeSummary({
  title,
  nextScheduledDelivery,
  mostPurchasedProduct,
  orderFrequency
}) {
  return (
    <div
      className="c-cafe-summary"
      style={{
        backgroundImage:
          "url(" + `${require("../assets/coffee-matte.jpg")}` + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
    >
      <Typography.Title className="c-cafe-summary__title">
        {title}
      </Typography.Title>
      <hr />
      <Row className="c-cafe-summary__row">
        <Col span={16}>
          <Typography.Text>Next scheduled delivery</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>{nextScheduledDelivery}</Typography.Text>
        </Col>
      </Row>
      <Row className="c-cafe-summary__row">
        <Col span={16}>
          <Typography.Text>Most purchased product</Typography.Text>
        </Col>
        <Col span={8} align="right">
          <Typography.Text>{mostPurchasedProduct}</Typography.Text>
        </Col>
      </Row>
      <Row className="c-cafe-summary__row">
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
