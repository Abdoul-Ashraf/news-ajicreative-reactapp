import React, { useState} from "react";
//import { NewsContext } from "../reducer/NewsContext";
import NewsArticle from "./NewsArticle";
import logo from "../assets/images/logoAjiCreative.png";
import './News.css';
function News() {
  
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=ca&apiKey=b4709be0a02b4c7cbf0256c4bf9a6f00")
    .then((res) => res.json())  
    .then((response) => {
        setData(response.articles);
      });
  };

  return (
    <div>
      <img src={logo} alt="" width="200" height="100"></img>
      <br />
      <button onClick={apiGet} class="boutton">Click to view news</button>
      <div className="all__news">
        {data.map((news) => (
              <NewsArticle dat={news} key={news.url} />
            ))}
      </div>
    </div>
  );
}

export default News;