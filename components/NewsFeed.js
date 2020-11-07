import Axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Col, Row, Image } from "antd";
const { Title, Paragraph, Text } = Typography;
import { Loading } from "./Loading";
import "./NewsFeed.scss";

function NewsItem({
  title,
  urlToImage,
  url,
  description,
  publishedAt,
  author
}) {
  return (
    <article className="c-news-feed__item">
      <a href={url}>
        <Row>
          <Col>
            <Image
              className="c-news-feed__item__image"
              width={250}
              src={urlToImage}
            />
          </Col>
          <Col className="c-news-feed__item__text-container" span={14} xxl={16}>
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
            <Text className="c-news-feed__item__publish-info">
              Published {publishedAt.substring(0, 10)} by {author}
            </Text>
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

  function fetchArticles() {
    setLoading(true);
    const fetchData = async () => {
      const response = await Axios.get("/api/news");

      if (response.status === 200 && response.data) {
        if (response.data.helsinkiNews)
          setHelsinkiArticles(response.data.helsinkiNews);
        if (response.data.coffeeNews)
          setCoffeeArticles(response.data.coffeeNews);
        console.log(response, "response in frontend");
      }
      setLoading(false);
    };
    fetchData();
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(helsinkiArticles, coffeeArticles);
  return (
    <div className="c-news-feed">
      <Title level={2} className="c-news-feed__title">
        Your personalized news feed
      </Title>
      {loading ? (
        <Loading />
      ) : (
        <Row className="c-news-feed__wrapper" gutter={[32, 16]} align="center">
          <Col span={12} xxl={10}>
            <Title className="c-news-feed__list__title" level={3}>
              Helsinki articles
            </Title>
            <div className="c-news-feed__list">
              {helsinkiArticles &&
                helsinkiArticles.map(article => (
                  <NewsItem key={article.title} {...article} />
                ))}
            </div>
          </Col>
          <Col span={12} xxl={10}>
            <Title className="c-news-feed__list__title" level={3}>
              Coffee industry articles
            </Title>
            <div className="c-news-feed__list">
              {coffeeArticles &&
                coffeeArticles.map(article => (
                  <NewsItem key={article.title} {...article} />
                ))}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
