import React from "react";
import { getRating } from "./../RatingGenaretor";
import { MdStar, MdStarBorder } from "react-icons/md";
import style from "./ShowReview.module.css";

const ShowReview = ({ product }) => {
  return (
    <div className={`${style.rating} pb-3`}>
      {getRating(product.ratings)?.map((rating, index) =>
        rating === "MdStar" ? (
          <MdStar key={index} />
        ) : (
          <MdStarBorder key={index} />
        )
      )}
      -
      <small className={style.retting_count}>
        <span> </span>
        {product.rettingCount === 0 ? " No" : product.reatingCount} review
      </small>
    </div>
  );
};

export default ShowReview;
