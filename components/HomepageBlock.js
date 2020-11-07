import { Typography } from "antd";
import './Hero.scss';
const { Title } = Typography;

export function HomgpageBlock() {
  return (
    <div className="c-hero" style={{backgroundImage: "url(" + `${require("../assets/coffee-background.jpg")}` + ")",}}>


    </div>
  );
}