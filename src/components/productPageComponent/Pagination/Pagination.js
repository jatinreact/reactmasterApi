import React from "react";
import style from "./Pagination.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="container">
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
  );
};

export default Pagination;
