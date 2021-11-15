import React from "react";
import ChcekOutForm from "./ChcekOutForm";
import CheckOutFooter from "./CheckOutFooter";
import CheckOutHeader from "./CheckOutHeader";

const CheckOutContactArea = () => {
  return (
    <div className="mt-5 ">
      <CheckOutHeader />
      <ChcekOutForm />
      <CheckOutFooter />
    </div>
  );
};

export default CheckOutContactArea;
