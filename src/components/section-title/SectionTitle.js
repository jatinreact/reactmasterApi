import React from "react";
import style from "./SectionTitle.module.css";

const SectionTitle = ({ text, description, star }) => {
  return (
    <div className="d-flex flex-column ps-relative">
      <div className={style.border_wrapper}>
        <div className={style.left_daigonal_line}> </div>
        <div className={style.right_daigonal_line}> </div>
        <div className={`${style.title_border}  d-inline-block mx-auto`}>
          <div
            className={`${style.inside} d-flex align-items-center justify-content-center `}
          >
            <h6 className="text-uppercase m-0 font_oswald text-white lp-2">
              <span className={`${star === "no" ? "d-none" : ""} `}>* </span>
              {text}{" "}
              <span className={`${star === "no" ? "d-none" : ""} `}> *</span>
            </h6>
          </div>
        </div>
      </div>

      <p
        className={` ${style.description} text-center white200 mt-2 font_rubik`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
