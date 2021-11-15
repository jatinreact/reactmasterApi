import React from "react";
// import Categorys from "../Categorys/Categorys";
import Pagination from "../Pagination/Pagination";
import ProductsArea from "../ProductsArea/ProductsArea";
import style from "./ProductPageLayout.module.css";

const ProductPageLayout = () => {
  return (
    <div className={style.layout}>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3 d-none d-lg-block">
            <Categorys />
          </div> */}
          <div className="col-lg-12 p-0">
            <ProductsArea />
          </div>
        </div>
      </div>
      {/* <div className="col-lg-9 p-0"> */}
        <Pagination />
      {/* </div> */}
    </div>
  );
};

export default ProductPageLayout;
