import CoffeBeanURL from "../assets/coffee-bean.svg";
import "./Loading.scss";
import { Typography } from "antd";

export function Loading() {
  return (
    <div class="c-loading__wrapper">
      <Typography.Text>
        Hold on, we're brewing up some fresh data
      </Typography.Text>
      <div class="c-loading__bean-container">
        <img class="c-loading__bean" src={CoffeBeanURL} />
        <img class="c-loading__bean" src={CoffeBeanURL} />
        <img class="c-loading__bean" src={CoffeBeanURL} />
      </div>
    </div>
  );
}
