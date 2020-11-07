import { Typography } from "antd";
import './Hero.scss';
const { Title } = Typography;


export function Hero() {
  return (
    <div className="c-hero" style={{backgroundImage: "url(" + `${require("../assets/coffee-background.jpg")}` + ")",}}>
        <div class="c-hero__overlay"></div>
   <Title className="c-hero__title">Hello Johannes.<br/>
   Welcome to your coffee dashboard.</Title>

    </div>
  );
}