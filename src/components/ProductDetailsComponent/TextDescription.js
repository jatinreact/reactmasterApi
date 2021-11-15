import React from "react";
import style from "./ProductDetails.module.css";

const TextDescription = ({ discription }) => {
  return (
    <div>
      {discription.map((data, index) => (
        <div key={index}>
          <p className={style.pro_des_title}>{data.title}</p>
          <p className={style.pro_des_text}>{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TextDescription;
