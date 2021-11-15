import React from "react";
import style from "./seconSection.module.css";
import CarClub from "./CarClub";
// import Products from "./Products";
import FearuredProducts from "./../FeaturedProduct/FeaturedProducts";
import WelcomeTitle from "./WelcomeTitle";

const SecondSection = () => {
  return (
    <div className={`${style.section} pb-3 pb-md-5 pt-3 bg-main`}>
      <div className="container">
        <WelcomeTitle />
        <CarClub />
        {/* <Products /> */}
        <FearuredProducts />
      </div>
    </div>
  );
};

export default SecondSection;
