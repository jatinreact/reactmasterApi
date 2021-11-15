import React from "react";
import { newsData } from "./../Data/newsData";
import SingleNews from "./SingleNews";
import style from "./NewsPageComponent.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const NewsArea = () => {
  return (
    <>
      <div>
        {newsData.slice(0, 2).map((news, index) => (
          <SingleNews news={news} key={index} />
        ))}
      </div>
      <div>
        <div className={style.pagination}>
          <p>Showing 1 to 9 of 37 items</p>
          <div className={style.page_wrapper}>
            <p className={style.active}>1</p>
            <p>2</p>
            <p>
              <MdKeyboardArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArea;
