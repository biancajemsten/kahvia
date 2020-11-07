import { Col, Row, Radio } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Bar, Polar } from 'react-chartjs-2';
import { CafeSummary } from "../components/CafeSummary";
import { TextBox } from "../components/TextBox";

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
      label: 'Helsinki',
      backgroundColor: 'rgba(66,22,22,0.7)',
      borderColor: 'rgba(66,22,22,0.7)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(66,22,22,0.8)',
      hoverBorderColor: 'rgba(66,22,22,0.8)',
      data: isQuantity ? cityDataForQuantity : cityDataForRevenue,
    },
    {
      label: 'Finland',
      backgroundColor: 'rgba(81,54,41,0.9)',
      borderColor: 'rgba(81,54,41,0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(81,54,41,0.95)',
      hoverBorderColor: 'rgba(81,54,41,0.95)',
      data: isQuantity ? countryDataForQuantity : countryDataForRevenue,
    }
  ],
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Y text'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'X text'
        }
      }],
    }
  },
});

  const cityDataForQuantity = [179, 184, 162, 182, 134, 123, 152, 141, 131, 138, 162, 174];
  const countryDataForQuantity = [190, 158, 151, 172, 118, 137, 167, 161, 145, 128, 170, 151];
  const cityDataForRevenue = [915, 884, 962, 434, 523, 382, 452, 656, 745, 635, 838, 984];
  const countryDataForRevenue = [993, 758, 872, 558, 437, 395, 475, 645, 505, 740, 867, 951];
  
const barOption = (e, setIsQuantity) => {
  const isQ = !!(e.target.value === 'quantity');
  setIsQuantity(isQ);
}
  

export default function DataDashboard() {
  const [isLoading, setLoading] = useState(true);
  const [isQuantity, setIsQuantity] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

const textBox1Props = {
  textValue: 'Based on studies, customers buy more coffee when the days are shorter, so stock up ready for Winter!',
  textClass: 'c-dashboard__tip'
}
const textBox2Props = {
  textValue: 'From October, customers are 30% more likely to stay inside. Do you want to reduce the number of take away cups?',
  textClass: 'c-dashboard__tip'
}
const textBox3Props = {
  textValue: 'Check out our shared deliveries to save money on travel and the environment!',
  textClass: 'c-dashboard__tip'
}
const textBox4Props = {
  textValue: 'The Helsinki Christmas Markets start in 1 month! Do you know the footfall past your cafe?',
  textClass: 'c-dashboard__tip'
}
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
        <Row>
          <Col span={8}>
            <CafeSummary {...summaryProps} />
              <TextBox {...textBox1Props} style={{marginTop: 24}} />
              <TextBox {...textBox2Props} />
              <TextBox  {...textBox4Props} />
              <TextBox {...textBox3Props} />
          </Col>
          <Col span={4}></Col>
          <Col span={12}>
            <Row span={24}>
            <h2>
              Most frequently ordered products in this season
            </h2>
            </Row>
            <Row span={24}>
              <Polar data={pData} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={22}>
            <h2 className="c-dashboard__chartDescription">
              Average coffee orders for each restaurant based on:
            </h2>
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <Radio.Group defaultValue="quantity" onChange={(e) => barOption(e, setIsQuantity)}>
              <Radio.Button value="quantity">Quantities</Radio.Button>
              <Radio.Button value="revenue">Revenue</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Bar data={() => bData(isQuantity)} />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
}
