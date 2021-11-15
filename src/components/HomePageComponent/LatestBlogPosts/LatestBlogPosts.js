import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import style from "./LatestBlogPost.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { BlogData } from "./../../Data/LatestBlogData";

const LatestBlogPosts = () => {
  return (
    <div className={`${style.section} mt_-6`}>
      <div className="container">
        <SectionTitle
          text="LATEST BLOG POST"
          description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        />
        <div className={`row ${style.post_container}`}>
          {BlogData.length > 0 &&
            BlogData.slice(0, 2).map((data, index) => (
              <div
                key={index}
                className={`${style.post} col-lg-6 mb-5 mb-lg-0`}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={data.img} alt="" className="w-100 rounded" />
                  </div>
                  <div className={`${style.conent} col-sm-6 mt-3 mt-sm-0`}>
                    <p className={style.articel_date_time}>
                      <span className={style.articel_date}>{data.date}</span>
                      <span className={style.articel_month}>/{data.month}</span>
                    </p>
                    <h5 className={style.title}>{data.title}</h5>
                    <p className={style.author}>
                      <span className={`${style.icon} white300 me-1`}>
                        <BsPencilSquare />
                      </span>
                      <span className="white300 me-1"> By: </span>
                      <span className="red">{data.author}</span>
                    </p>
                    <p className={style.articel}>{data.description}</p>
                    <div className="text-center">
                      <button className={style.button}>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;
