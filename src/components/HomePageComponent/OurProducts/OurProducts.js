import React from "react";
import SectionTitle from "../../section-title/SectionTitle";
import OurProduct from "./OurProduct";

const OurProducts = () => {
  return (
    <div className="bg-main pt-5 pb-3 pb-md-5 mt_-6">
      <SectionTitle
        text={"Our products"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, recusandae?"
        }
      />
      <OurProduct />
    </div>
  );
};

export default OurProducts;
