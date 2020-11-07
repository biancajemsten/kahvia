import { Typography, Row, Col } from "antd";
import "./DeliverySummary.scss";
const { Title, Text } = Typography;

export function DeliverySummary({
  title,
  nextScheduledDelivery,
  orderFrequency
}) {
  return (
    <div
      className="c-delivery-summary"
      style={{
        backgroundImage: "url(" + `${require("../assets/coffee-bag.jpg")}` + ")"
      }}
    >
      <div className="c-delivery-summary__overlay">
        <Title className="c-delivery-summary__title">{title}</Title>
        <hr className="c-delivery-summary__divider" />
        <Text className="c-delivery-summary__info">
          Next scheduled delivery: {nextScheduledDelivery} | Order frequency:
          {orderFrequency}
        </Text>
      </div>
    </div>
  );
}
