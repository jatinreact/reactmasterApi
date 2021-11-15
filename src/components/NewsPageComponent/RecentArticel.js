import React from "react";
import { newsData } from "./../Data/newsData";
import style from "./NewsPageComponent.module.css"

const RecentArticel = () => {
  return (
    <div>
    <h3 className={`${style.side_bar_title}`}>Recent Articles</h3>
      {newsData.slice(0, 2).map((news, index) => (
        <div key={index}>
          <p className={style.recent_articel_title} >{news.title}</p>
          <p className={style.publish_date_author}>
            {news.date} / by: {news.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentArticel;
