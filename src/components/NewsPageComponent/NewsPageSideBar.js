import React from "react";
import NewsPageSliderBarCheckbox from "./NewsPageSliderBarCheckbox";
import RecentArticel from "./RecentArticel";
import style from "./NewsPageComponent.module.css"
import image from "./../../images/tag_clound.jpg";

const NewsPageSideBar = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search all articles..." className={`${ style.search_bar} form-coltroll`} />
      </form>
      <NewsPageSliderBarCheckbox />
      <RecentArticel />
      <div>
        <h3 className={`${style.side_bar_title}`}>Tags Cloud</h3>
        <img src={image} className="w-100 rounded" alt="" />
      </div>
    </div>
  );
};

export default NewsPageSideBar;
