import React from "react";
import { contactData } from "./../Data/FooterData";
import paymentImg from "./../../images/payment .png";
import style from "./Footer.module.css";

const FooterBottom = () => {
  return (
    <div className="bg-main mt_-6">
      <div className="container">
        <div className="row pt-2 pt-md-0">
          <div className="col-md-4 ms-auto d-flex align-items-center justify-content-center">
            {contactData.map((data, index) => (
              <a
                key={index}
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className={style.conact_icon}
              >
                <data.icon />
              </a>
            ))}
          </div>
          <div
            className={`${style.payment} col-md-4 d-flex align-items-center justify-content-end`}
          >
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
