import React from "react";
import style from "./Footer.module.css";

const LeftFooterCard = ({ data }) => {
  return (
    <>
      <h4 className={`text-white text-uppercase  ${style.title}`}>{null}</h4>
      <p className={`${style.description} white300`}>{data.description} </p>
      {data.contents.map((content, index) => (
        <div className="mt-auto" key={index}>
          <p
            className={`${style.content} text-white d-flex align-items-center mb-3 `}
          >
            <content.icon className="red me-2 fs-21 red900" />
            <span>{content.text} :</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default LeftFooterCard;
