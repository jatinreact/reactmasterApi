import React, { useState } from "react";
import style from "./ProductDetails.module.css";
import { singleProductDetailsData } from "./../Data/SingleProductDetailsData";
import TextDescription from "./TextDescription";

const detailsMenuList = [
  "Description",
  "Reviews",
  "Additional Information",
  "Tags",
];

const ProductDetails = () => {
  const [selected, setSelected] = useState("Description");

  return (
    <div className="container mt-5 pb-5">
      <div className="d-md-flex mb-4">
        {detailsMenuList.map((menu, index) => (
          <div key={index}>
            {" "}
            <p
              onClick={() => setSelected(menu)}
              className={`${style.menu} me-5 cursor-ponter ${
                selected === menu ? style.active : ""
              }`}
              
            >
              {menu}
            </p>
            <div className="d-md-none">
              {menu === "Description" && (
                <div
                  className={`${
                    selected === "Description" ? "d-block" : "d-none"
                  }`}
                >
                  <TextDescription discription={singleProductDetailsData} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={`d-none d-md-block`}>
        <TextDescription discription={singleProductDetailsData} />
      </div>
    </div>
  );
};

export default ProductDetails;
