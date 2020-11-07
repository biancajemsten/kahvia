// import axios from "axios";
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export default async (req, res) => {
  try {
    const helsinkiNews = await newsapi.v2.everything({
      q: "Helsinki"
    });
    const coffeeNews = await newsapi.v2.everything({
      q: "coffee"
    });
    console.log(helsinkiNews, coffeeNews);

    const articles = {
      helsinkiNews: helsinkiNews.articles,
      coffeeNews: coffeeNews.articles
    };
    console.log(articles);
    res.status = 200;
    res.send(articles);
  } catch (err) {
    console.log(err);
  }
  // newsapi.v2.topHeadlines({
  //     sources: 'bbc-news,the-verge',
  //     q: 'bitcoin',
  //     category: 'business',
  //     language: 'en',
  //     country: 'us'
  //   }).then(response => {
  //     console.log(response);
  //     /*
  //       {
  //         status: "ok",
  //         articles: [...]
  //       }
  //     */
  //   });
};
