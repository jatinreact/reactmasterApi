import React from "react";
import Slider from "./../../components/HomePageComponent/Slider/Slider";
import MenuBar from "./../../components/MenuBar/MenuBar";
import SecondSection from "./../../components/HomePageComponent/second-section/SecondSection";
import Tstimonial from "./../../components/HomePageComponent/Testimonial/Tstimonial";
import OurProducts from "./../../components/HomePageComponent/OurProducts/OurProducts";
// import NewAndBestSellerProduct from "../../components/HomePageComponent/NewAndBestSellerProduct/NewAndBestSellerProduct";
import ProcessSystem from "./../../components/HomePageComponent/ProcessSystem/ProcessSystem";
import OfferSubscribe from "./../../components/HomePageComponent/OfferSubscribe/OfferSubscribe";
import LatestBlogPosts from "../../components/HomePageComponent/LatestBlogPosts/LatestBlogPosts";
import BrandAndClient from "../../components/HomePageComponent/BrandAndClient/BrandAndClient";
import Gallery from "../../components/HomePageComponent/Gallery/Gallery";

const HomePage = () => {
  return (
    <>
      <Slider />
      <MenuBar />
      <SecondSection />
      <Tstimonial />
      <OurProducts />
      {/* <NewAndBestSellerProduct /> */}
      <ProcessSystem />
      <LatestBlogPosts />
      <BrandAndClient />
      <Gallery />
      <OfferSubscribe />
    </>
  );
};

export default HomePage;
