import React from "react";
import style from "./OfferSubscribe.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const OfferSubscribe = () => {
  return (
    <div className={`bg-main mt_-6 ${style.section}`}>
      <div className={`col-md-9 col-10 mx-auto ${style.my_border}`}></div>
      <div className="container text-center">
        <small className={`red mb-sm-2 mb-3  font_rubik`}>
          Lorem ipsum dolor sit amet.
        </small>
        <h3 className={`text-uppercase text-white mb-2 ${style.title}`}>
          Ten percent member discount
        </h3>
        <p className={`white300 px-4 fs-14 mb-0`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <form className="col-md-9  col-sm-11 col-lg-7 col-xl-6 col-10 mx-auto  pt-3">
            <div className={style.subcribe_container}>
              <input
                type="text"
                className={`form-control shadow-none ${style.subscribe_input}`}
                placeholder="Email Address"
              />
              <span className={style.icon}>
                <MdKeyboardArrowRight />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferSubscribe;
