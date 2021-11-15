import React from "react";
import car6 from "../../../images/car6.jpg";
import style from "./NewAndBestSeller.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const NewAndBestSellerProduct = () => {
  return (
    <div className={"bg-main"}>
      <div className="row">
        <div className="col-md-6 pe-0 mb-4 mb-md-0">
          <div className={`${style.card} text-center `}>
            <img src={car6} alt="" />
            <div>
              <h5 className={`${style.text} text-uppercase text-white`}>
                new arivals
              </h5>
              <h2 className={"text-uppercase"}>Good help & Guard</h2>
              <p className={`text-white ${style.text} ${style.text3}`}>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
              <p className={style.btn}>
                <span>lorem Ipsam</span> <MdKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <div className={`${style.card} text-center `}>
            <img src={car6} alt="" />
            <div>
              <h5 className={`${style.text} text-uppercase text-white`}>
                new arivals
              </h5>
              <h2 className={"text-uppercase"}>Good help & Guard</h2>
              <p className={`text-white ${style.text} ${style.text3}`}>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
              <p className={style.btn}>
                <span>lorem Ipsam</span> <MdKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAndBestSellerProduct;
