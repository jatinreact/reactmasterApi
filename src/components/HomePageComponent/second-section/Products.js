import React, { useState } from "react";
import { productData } from "../../Data/ProductList";
import Product from "./Product";

const Products = () => {
  const [productList] = useState(productData);
  return (
    <div className="row mt-5 font_oswald fw-200">
      {productList.length > 0 &&
        productList.map((product, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0">
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};

export default Products;
