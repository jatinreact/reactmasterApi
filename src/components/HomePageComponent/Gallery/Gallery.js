import React from "react";
import img1 from "./../../../images/gallery1.jpg";
import img2 from "./../../../images/galler2.jpg";
import img3 from "./../../../images/galler3.jpg";
import style from "./Gallery.module.css";

const datas = [img1, img2, img3, img2, img1];

const Gallery = () => {
  return (
    <div className="bg-main mt_-6">
      <div className="container">
        <h3 className="text-white text-center font_oswald text-uppercase mb-4 fw-normal">
          #we ON INSTAGRAM
        </h3>
      </div>
      <div className={style.gallery}>
        <div className="row">
          {datas.map((data, index) => (
            <div
              className={`col text-center p-0 ${style.responsive}`}
              key={index}
            >
              <img src={data} alt="" className={`w-100`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
