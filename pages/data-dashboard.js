import { Empty, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
export default function DataDashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  if (isLoading)
    return (
      <Row justify="center" align="center">
        <Col flex>
          <Loading />
        </Col>
      </Row>
    );
  else
    return (
      <div className="container">
        <h1>This is a company data dashboard</h1>
        <Empty />
      </div>
    );
}