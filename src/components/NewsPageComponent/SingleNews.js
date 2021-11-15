import React from "react";
import style from "./NewsPageComponent.module.css";
import { IoArrowForward } from "react-icons/io5";

const SingleNews = ({ news }) => {
  console.log("news::",news)
  return (
    <>
      <div className={`${style.single_news} row`}>
        <div className="col-md-3">
          <img src={news.image} alt={news.title} className="img-fluid" />
        </div>
        <div className={`col-md-9 ${style.news_content}`}>
          <p className={`text-uppercase ${style.news_title}`}>{news.title}</p>
          <p className={style.publish_date_author}>
            {news.date} / by: {news.author}
          </p>
          <p className={style.description}>
            {news.description.slice(0, 200)}...
          </p>
          <button className={`${style.my_btn} btn shadow-none`}>
            <span className="me-1">Read more</span>
            <IoArrowForward className="text-white fs-16" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
