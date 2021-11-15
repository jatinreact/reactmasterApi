import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import brandImage from "../../../images/brand.png";
import style from "./BrandAndClient.module.css";

const datas = [brandImage, brandImage, brandImage, brandImage, brandImage];

const BrandAndClient = () => {
  return (
    <div className="bg-main mt_-6">
      <div className="container">
        <SectionTitle text="LOGO BRANDS &amp; CLIENTS" star={"no"} />
        <div className="row" style={{ padding: "30px 0 70px" }}>
          {datas.map((data, index) => (
            <div
              className={`col text-center px-3 ${style.responsive}`}
              key={index}
            >
              <img src={data} alt="" className={`w-75 px-4 px-sm-0`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAndClient;
