import { Typography, Row, Col } from "antd";
const { Title } = Typography;
import "./HomepageBlock.scss";
import DeliveryTruck from "../assets/delivery-truck.svg";
import Insights from "../assets/stats.svg";
import Networking from "../assets/networking.svg";

export function HomepageBlock() {
  return (
    <div className="c-blocks">
      <Row className="c-blocks__row" align="center">
        <Col span={8} xxl={6} align="center" className="c-blocks__col">
          <a href="/delivery-schedule">
            <div className="c-blocks__imageContainer">
              <img className="c-blocks__image" src={DeliveryTruck} />
            </div>
            <Title level={2} className="c-blocks__text">
              Next scheduled delivery
            </Title>
          </a>
        </Col>
        <Col span={8} xxl={6} align="center" className="c-blocks__col">
          <a href="/data-dashboard">
            <div className="c-blocks__imageContainer second">
              <img className="c-blocks__image" src={Insights} />
            </div>
            <Title level={2} className="c-blocks__text">
              My Insights and Market Trends
            </Title>
          </a>
        </Col>
        <Col span={8} xxl={6} align="center" className="c-blocks__col">
          <a href="/">
            <div className="c-blocks__imageContainer">
              <img className="c-blocks__image" src={Networking} />
            </div>
            <Title level={2} className="c-blocks__text">
              Network with Suppliers
            </Title>
          </a>
        </Col>
      </Row>
    </div>
  );
}
