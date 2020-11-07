import { Empty, Col, Row } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Polar } from 'react-chartjs-2';

export default function DataDashboard() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);



  const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

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
      <div className="c-dashboard__container">
        <div>TOP PART: BIANCA </div>
        <h1>This is a company data dashboard</h1>
        <Empty />
        <div><Polar data={data} /></div>
      </div>
    );
}
