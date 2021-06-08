import React from "react";

function NewsArticle({ dat }) {
  return (
    <div className="news">
      <h1 className="news__title">{dat.title}</h1>
      <img className="news__img" src={dat.urlToImage} width="500"/>
      <p className="news__desc">{dat.description}</p>
      <span className="news__author">{dat.author}</span> <br />
      <span className="news__published">{dat.publishedAt}</span>
      <span className="news__source">{dat.source.name}</span>
    </div>
  );
}

export default NewsArticle;