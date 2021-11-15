import React from "react";
import style from "./ProductDetails.module.css";
import audioImg from "./../../images/audio_img.png";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioView = () => {
  return (
    <div className={` ${style.audio_section}`}>
      <div className="container">
        <div className={style.audio_wrapper}>
          <div className={`col-5 col-md-4 col-lg-3  ${style.audio_img_container}`}>
            <img src={audioImg} className="img-fluid" alt="" />
          </div>
          <div className={`d-flex mt-3 col-md-6 ${style.audio_control}`}>
            <div className="text-center px-2">
              <div className={style.audio_control_icon}>
                <FaPlay />
              </div>
              <p className={style.audio_title}>Stock exhaust; BMW 340i (F30)</p>
            </div>
            <div className="text-center px-2">
              <div className={style.audio_control_icon}>
                <FaPause />
              </div>
              <p className={style.audio_title}>Stock exhaust; BMW 340i (F30)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioView;
