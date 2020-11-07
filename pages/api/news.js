// import axios from "axios";
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export default async (req, res) => {
  try {
    const helsinkiNews = await newsapi.v2.everything({
      q: "helsinki coffee"
    });
    const coffeeNews = await newsapi.v2.everything({
      q: "coffee"
    });

    const articles = {
      helsinkiNews: helsinkiNews.articles,
      coffeeNews: coffeeNews.articles
    };
    res.status = 200;
    res.send(articles);
  } catch (err) {
    console.log(err);
  }
};
