import CoffeBeanURL from "../assets/coffee-bean.svg";
import "./Loading.scss";
import { Typography } from "antd";

export function Loading() {
  return (
    <div className="c-loading__wrapper">
      <Typography.Text>
        Hold on, we're brewing up some fresh data
      </Typography.Text>
      <div className="c-loading__bean-container">
        <img className="c-loading__bean" src={CoffeBeanURL} />
        <img className="c-loading__bean" src={CoffeBeanURL} />
        <img className="c-loading__bean" src={CoffeBeanURL} />
      </div>
    </div>
  );
}
