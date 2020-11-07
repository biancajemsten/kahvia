import { Typography, Row, Col, DatePicker, TimePicker } from "antd";
import "./DeliveryScheduler.scss";
const { Title, Text } = Typography;
import { useState } from "react";
import { OtherDeliveries } from "./OtherDeliveries";

export function DeliveryScheduler() {
  const [chosenDate, setChosenDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  return (
    <div className="c-delivery-scheduler">
      <Title className="c-delivery-scheduler__title">Schedule a Delivery</Title>
      <hr />
      <Row className="c-delivery-scheduler__row">
        <Col span={16}>
          <Text>Day</Text>
        </Col>
        <Col span={8} className="c-delivery-scheduler__align-right">
          <DatePicker
            onChange={(date, dateString) => setChosenDate(dateString)}
          />
        </Col>
      </Row>
      <Row className="c-delivery-scheduler__row">
        <Col span={16}>
          <Text>From</Text>
        </Col>
        <Col span={8} className="c-delivery-scheduler__align-right">
          <TimePicker
            onChange={(value, valueString) => setFromTime(valueString)}
          />
        </Col>
      </Row>
      <Row className="c-delivery-scheduler__row">
        <Col span={16}>
          <Text>To</Text>
        </Col>
        <Col span={8} className="c-delivery-scheduler__align-right">
          <TimePicker
            onChange={(value, valueString) => setToTime(valueString)}
          />
        </Col>
      </Row>
      <Row className="c-delivery-scheduler__row">
        {chosenDate.length > 0 && !fromTime && !toTime && (
          <Text>Your delivery will be {chosenDate}</Text>
        )}
        {chosenDate.length > 0 && fromTime.length > 0 && !toTime && (
          <Text>
            Your delivery will be {chosenDate}, {fromTime}
          </Text>
        )}
        {chosenDate.length > 0 && fromTime.length > 0 && toTime && (
          <Text>
            Your delivery will be {chosenDate}, {fromTime} - {toTime}
          </Text>
        )}
      </Row>
      <Row>
        <Title className="c-delivery-scheduler__second-title">
          Other deliveries in your area
        </Title>
      </Row>
      <hr />
      <Row>
        {!chosenDate && (
          <Text> choose a date to see other local deliveries</Text>
        )}
      </Row>
      <div className="c-delivery-scheduler__others">
        {chosenDate && (
          <OtherDeliveries
            date={chosenDate}
            chosenTime={fromTime}
          ></OtherDeliveries>
        )}
      </div>
    </div>
  );
}
