import { Hero } from "../components/Hero";
import { HomepageBlock } from "../components/HomepageBlock";
import { NewsFeed } from "../components/NewsFeed";
import CoffeBeanURL from "../assets/coffee-bean.svg";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomepageBlock />
      <div className="c-homepage__bean-container">
        <img className="c-loading__bean" src={CoffeBeanURL} />
        <img className="c-loading__bean" src={CoffeBeanURL} />
        <img className="c-loading__bean" src={CoffeBeanURL} />
      </div>
      <NewsFeed />
    </div>
  );
}
