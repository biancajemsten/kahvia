import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Bar, Polar } from 'react-chartjs-2';
import { CafeSummary } from "../components/CafeSummary";

const barColors =['rgba(66,22,22,0.7)','rgba(133,90,69,0.7)', 'rgba(81,54,41,0.7)', 'rgba(56,38,29,0.7)', 'rgba(133,117,109,0.7)', 'rgba(245,166,127,0.7)', 'rgba(31,23,16,0.7)', 'rgba(71,52,36,0.7)']
const hoverColors =['rgba(66,22,22,0.8)','rgba(133,90,69,0.8)', 'rgba(81,54,41,0.8)', 'rgba(56,38,29,0.8)', 'rgba(133,117,109,0.8)', 'rgba(245,166,127,0.8)', 'rgba(31,23,16,0.8)', 'rgba(71,52,36,0.8)']

  const pData = {
    labels: ['paulig TA cup 200 ml', 'Tazza hot choco', 'Paulig Vending Medium Roast', 'Paulig Special Espresso','Lipton Lemon tea','Vendor Whitener','Vendor Espresso','Tazza Low Lactose Hot Choco'],
    datasets: [
      {
        borderWidth: 1,
        data: [65, 59, 80, 81, 92, 51, 37, 78],
        backgroundColor: barColors,
        hoverBackgroundColor: hoverColors,

      }
    ]
  };

const bData = (isQuantity) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'City',
      backgroundColor: 'rgba(66,22,22,0.7)',
      borderColor: 'rgba(66,22,22,0.7)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(66,22,22,0.8)',
      hoverBorderColor: 'rgba(66,22,22,0.8)',
      data: isQuantity ? cityDataForQuantity : cityDataForRevenue,
    },
    {
      label: 'Country',
      backgroundColor: 'rgba(81,54,41,0.9)',
      borderColor: 'rgba(81,54,41,0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(81,54,41,0.95)',
      hoverBorderColor: 'rgba(81,54,41,0.95)',
      data: isQuantity ? countryDataForQuantity : countryDataForRevenue,
    }
  ]
});

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
          <Col span={7}>
            <CafeSummary {...summaryProps} />
            <CafeSummary {...summaryProps} />
          </Col>
          <Col span={17}>
            <Polar data={pData} />
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Bar data={() => bData(isQuantity)} />
          </Col>
          <Col span={2}></Col>
        </Row>
        <button onClick={() => barOption(setIsQuantity, isQuantity)}>{isQuantity ? 'Revenue' : 'Quantity'}</button>
      </div>
    );
}
