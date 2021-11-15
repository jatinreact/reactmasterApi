import React, { useState, useEffect } from "react";
import ProductCard from "../../commonComponent/ProductCard/ProductCard";
import style from "./OurProduct.module.css";
//  import { productPageProductData } from './../../Data/ProductPageProductsData';
import axios from "axios";

const categorys = ["Wheels", "Sounds", "Featured", "Home page"];

const OurProduct = () => {
  const [ourProducts, setourProducts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://lambhoghini.herokuapp.com/api/v1.1/product?category=Bike")
        .then((res) => {
          setourProducts(res.data.data);
        });
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  return (
    <div className="container">
      <div className="d-flex align-items-center flex-wrap justify-content-center">
        {categorys.map((category, index) => (
          <p key={index} className={`mx-2 white300 ${style.category}`}>
            {category}
          </p>
        ))}
      </div>
      <div className="row mt-5">
        {ourProducts.map((product, index) => (
          <div key={index} className={`col-lg-3 mb-5 mb-lg-0 d-flex col-sm-6`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
