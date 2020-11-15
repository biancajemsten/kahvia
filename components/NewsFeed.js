import Axios from "axios";
import { useEffect, useState, useMemo, useLayoutEffect } from "react";
import { Typography, Col, Row, Image } from "antd";
const { Title, Paragraph, Text } = Typography;
import { Loading } from "./Loading";
import "./NewsFeed.scss";
import CoffeBeanURL from "../assets/coffee-bean.svg";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function NewsItem({
  title,
  urlToImage,
  url,
  description,
  publishedAt,
  source,
  largeScreen,
  mediumScreen
}) {
  return (
    <article className="c-news-feed__item">
      <a href={url}>
        <Row wrap={!mediumScreen}>
          <Col flex={mediumScreen && "250px"} span={!mediumScreen && 24}>
            <img className="c-news-feed__item__image" src={urlToImage} />
          </Col>
          <Col className="c-news-feed__item__text-container" flex="auto">
            <Title ellipsis level={3}>
              {title}
            </Title>

            <Paragraph
              ellipsis={{
                rows: 2
              }}
            >
              {description}
            </Paragraph>
            {mediumScreen && (
              <Text ellipsis className="c-news-feed__item__publish-info">
                Published {publishedAt.substring(0, 10)}{" "}
                {largeScreen && source && source.name && `by ${source.name}`}
              </Text>
            )}
          </Col>
        </Row>
      </a>
    </article>
  );
}

export function NewsFeed() {
  const [loading, setLoading] = useState(true);
  const [helsinkiArticles, setHelsinkiArticles] = useState(null);
  const [coffeeArticles, setCoffeeArticles] = useState(null);
  const [width, height] = useWindowSize();

  const mediumScreen = useMemo(() => {
    return width >= 575;
  }, [width]);

  const largeScreen = useMemo(() => {
    return width >= 1200;
  }, [width]);

  function fetchArticles() {
    setLoading(true);
    const fetchData = async () => {
      const response = await Axios.get("/api/news");

      if (response.status === 200 && response.data) {
        if (response.data.helsinkiNews)
          setHelsinkiArticles(response.data.helsinkiNews);
        if (response.data.coffeeNews)
          setCoffeeArticles(response.data.coffeeNews);
      }
      setLoading(false);
    };
    fetchData();
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="c-news-feed">
      <Title level={2} className="c-news-feed__title">
        Your personalized news feed
      </Title>
      {loading ? (
        <Row className="c-news-feed__loading-container" align="center">
          <Col>
            <Title>Loading</Title>
            <img className="c-news-feed__bean" src={CoffeBeanURL} />
            <img className="c-news-feed__bean" src={CoffeBeanURL} />
            <img className="c-news-feed__bean" src={CoffeBeanURL} />
          </Col>
        </Row>
      ) : (
        <Row className="c-news-feed__wrapper" gutter={[32, 16]} align="center">
          <Col span={24} md={12} xxl={10}>
            <Title className="c-news-feed__list__title" level={3}>
              Helsinki
            </Title>
            <div className="c-news-feed__list">
              {helsinkiArticles &&
                helsinkiArticles.map(article => (
                  <NewsItem
                    key={article.title}
                    {...article}
                    largeScreen={largeScreen}
                    mediumScreen={mediumScreen}
                  />
                ))}
            </div>
          </Col>
          <Col span={24} md={12} xxl={10}>
            <Title className="c-news-feed__list__title" level={3}>
              Coffee Industry
            </Title>
            <div className="c-news-feed__list">
              {coffeeArticles &&
                coffeeArticles.map(article => (
                  <NewsItem
                    key={article.title}
                    {...article}
                    largeScreen={largeScreen}
                    mediumScreen={mediumScreen}
                  />
                ))}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
