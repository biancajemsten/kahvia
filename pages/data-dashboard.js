import { Col, Row, Radio } from "antd";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Bar, Polar } from 'react-chartjs-2';
import { CafeSummary } from "../components/CafeSummary";
import { TextBox } from "../components/TextBox";

const barColors =['rgba(66,22,22,0.7)','rgba(133,90,69,0.7)', 'rgba(81,54,41,0.7)', 'rgba(56,38,29,0.7)', 'rgba(133,117,109,0.7)', 'rgba(245,166,127,0.7)', 'rgba(31,23,16,0.7)', 'rgba(71,52,36,0.7)']
const hoverColors =['rgba(66,22,22,0.8)','rgba(133,90,69,0.8)', 'rgba(81,54,41,0.8)', 'rgba(56,38,29,0.8)', 'rgba(133,117,109,0.8)', 'rgba(245,166,127,0.8)', 'rgba(31,23,16,0.8)', 'rgba(71,52,36,0.8)']

const personalPData = {
  labels: ['paulig TA cup 200 ml', 'Tazza hot choco', 'Paulig Vending Medium Roast', 'Paulig Special Espresso','Lipton Lemon tea','Vendor Whitener','Vendor Espresso','Tazza Low Lactose Hot Choco'],
  datasets: [
    {
      borderWidth: 1,
      data: [65, 59, 80, 81, 52, 71, 37, 78],
      backgroundColor: barColors,
      hoverBackgroundColor: hoverColors,

    }
  ]
};

const cityPData = {
  labels: ['paulig TA cup 200 ml', 'Tazza hot choco', 'Paulig Vending Medium Roast', 'Paulig Special Espresso', 'Lipton Lemon tea', 'Vendor Whitener', 'Vendor Espresso', 'Tazza Low Lactose Hot Choco'],
  datasets: [
    {
      borderWidth: 1,
      data: [78, 92, 76, 51, 43, 34, 65, 81],
      backgroundColor: barColors,
      hoverBackgroundColor: hoverColors,
    }
  ]
};

const countryPData = {
  labels: ['paulig TA cup 200 ml', 'Tazza hot choco', 'Paulig Vending Medium Roast', 'Paulig Special Espresso', 'Lipton Lemon tea', 'Vendor Whitener', 'Vendor Espresso', 'Tazza Low Lactose Hot Choco'],
  datasets: [
    {
      borderWidth: 1,
      data: [45, 34, 56, 32, 56, 67, 63, 71],
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
    title: {
      display: true,
      text: 'Custom Chart Title'
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: isQuantity ? 'units' : 'euros',
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
  const countryDataForRevenue = [985, 758, 872, 558, 437, 395, 475, 645, 505, 740, 867, 951];
  
const barOption = (e, setIsQuantity) => {
  const isQ = !!(e.target.value === 'quantity');
  setIsQuantity(isQ);
}
  

export default function DataDashboard() {
  const [isLoading, setLoading] = useState(true);
  const [isQuantity, setIsQuantity] = useState(true);
  const [pDataValue, setPDataValue] = useState(personalPData);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
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

const mobileTextBoxProps ={
  textValue: "Please rotate your device or switch to desktop to see your stats"
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
      <div>
      <div className = "c-dashboard__mobile">
         <TextBox {...mobileTextBoxProps} />
      </div>
      <div className="c-dashboard__container">
        <Row>
          <Col span={24} lg={8}>
            <CafeSummary {...summaryProps} />
            <TextBox {...textBox1Props} style={{marginTop: 24}} />
            <TextBox {...textBox2Props} />
            <TextBox  {...textBox4Props} />
            <TextBox {...textBox3Props} />
          </Col>
          <Col span={24} lg={16}>
            <Row>
              <Col span={2}></Col>
              <Col span={20} md={20}>
              <h2 className='c-dashboard__centerText'>
                Most frequently ordered products this season (based off previous data)
              </h2>
              </Col>
              <Col span={2}></Col>
              <Col span={24} style={{textAlign: 'center', margin: '20px'}}>
                <Radio.Group defaultValue="personal">
                  <Radio.Button value="personal" onClick={() => setPDataValue(personalPData)}>Personal data</Radio.Button>
                  <Radio.Button value="city" onClick={() => setPDataValue(cityPData)}>Helsinki</Radio.Button>
                  <Radio.Button value="country" onClick={() => setPDataValue(countryPData)}>Finland</Radio.Button>
                </Radio.Group>
              </Col>
              <Col span={24}>
                <Polar data={pDataValue} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={22}>
            <h2 className="c-dashboard__chartDescription">
              Average coffee orders for each cafe per month based on:
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
          <Col span={2}>
              <p className="c-dashboard__rotatedAxes">{isQuantity ? 'Av. orders per cafe' : 'Av. revenue from orders per cafe (euros)'}</p>
          </Col>
          <Col span={20}>
            <Bar data={() => bData(isQuantity)} />
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <p className="c-dashboard__axesDescription">Monthly average per cafe</p>
          </Col>
          <Col span={8}></Col>
        </Row>
      </div>
      </div>
    );
}
