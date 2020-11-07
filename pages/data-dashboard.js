import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Bar, Line, Polar } from 'react-chartjs-2';
import { CafeSummary } from "../components/CafeSummary";


  const pData = {
    labels: ['Coffee', 'Tea', 'Hot chocolate', 'decaf'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81]
      }
    ]
  };

  const bData = (isQuantity) => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'City',
        backgroundColor: 'rgba(255,99,132)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        stack: 1,
        data: isQuantity ? cityDataForQuantity : cityDataForRevenue,
      }, 
      {
        label: 'Country',
        backgroundColor: 'rgba(255,150,255)',
        borderColor: 'rgba(255,150,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,150,255)',
        hoverBorderColor: 'rgba(255,150,255,1)',
        stack: 1,
        data: isQuantity ? countryDataForQuantity : countryDataForRevenue,
      }
    ]
  })

  const lData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'City',
        backgroundColor: 'rgba(255,99,132)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        order: 1,
        data: [34, 23, 82, 91, 84, 62, 52, 74, 52, 41, 31, 38]
      }, 
      {
        label: 'Country',
        backgroundColor: 'rgba(255,150,255)',
        borderColor: 'rgba(255,150,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,150,255)',
        hoverBorderColor: 'rgba(255,150,255,1)',
        order: 2,
        data: [72, 18, 37, 81, 90, 58, 51, 67, 61, 45, 28, 40]
      }
    ]
  }
  const cityDataForQuantity = [34, 23, 82, 91, 84, 62, 52, 74, 52, 41, 31, 38];
  const countryDataForQuantity = [72, 18, 37, 81, 90, 58, 51, 67, 61, 45, 28, 40];
  const cityDataForRevenue = [134, 123, 182, 191, 184, 162, 152, 174, 152, 141, 131, 138];
  const countryDataForRevenue = [172, 118, 137, 91, 190, 158, 52, 167, 161, 145, 105, 140];
  
const barOption = (setIsQuantity, isQuantity) => (
    setIsQuantity(!isQuantity)
);
  

export default function DataDashboard() {
  const [isLoading, setLoading] = useState(false);
  const [isQuantity, setIsQuantity] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const summaryProps = {
    title: "Helsinki Cafe",
    nextScheduledDelivery: "Nov 15",
    mostPurchasedProduct: "Juhla Mokha",
    orderFrequency: "Weekly"
  };

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
        <div>TOP PART: BIANCA </div>
        <h1>This is a company data dashboard</h1>
        <Row>
          <Col span={8}>
            <CafeSummary {...summaryProps} />
          </Col>
          <Col flex={1}>Item2</Col>
        </Row>
        <div><Polar data={pData} /></div>
        <div><Bar data={() => bData(isQuantity)} /></div>
        <button onClick={() => barOption(setIsQuantity, isQuantity)}>{isQuantity ? 'Revenue' : 'Quantity'}</button>
      </div>
    );
}
