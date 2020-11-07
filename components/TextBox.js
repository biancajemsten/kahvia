import { Typography, Row, Col } from "antd";
import "./TextBox.scss";
import CoffeBeanURL from "../assets/coffee-bean.svg";

export function TextBox({
    textValue
}) {
  return (
    <div className="c-textbox">
      <div className="">
        <img className="c-textbox__bean" src={CoffeBeanURL} />
      </div>
      <Typography.Text className="c-textbox__text">
        {textValue}
      </Typography.Text>
    </div>
  );
}
