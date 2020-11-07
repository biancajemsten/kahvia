import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { CafeSummary } from "../components/CafeSummary";
export default function DataDashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (isLoading)
    return (
      <Row justify="center" className="c-dashboard__loading-container">
        <Col flex>
          <Loading />
        </Col>
      </Row>
    );
  else
    return (
      <div className="c-dashboard__container">
        <Row>
          <Col span={8}>
            <CafeSummary />
          </Col>
          <Col flex={1}>Item2</Col>
        </Row>
        <div>ISABEL WORK ON CHARTS HERE</div>
      </div>
    );
}
