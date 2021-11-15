import React from "react";
import style from "./seconSection.module.css";

const Product = ({ product }) => {
  const { image, category, title, offer } = product;
 
  return (
    <div className={`${style.product_image_container} rounded`}>
      <img src={image} alt={category} />
      <div>
        <h6 className="text-white mb-1">{category}</h6>
        <h5>{title}</h5>
        <h6 className="text-white mt-3">{offer}</h6>
      </div>
    </div>
  );
};

export default Product;
