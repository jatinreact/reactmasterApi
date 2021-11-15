import React from "react";
import style from "./MenuBar.module.css";
export const SubTotalSummary = ({ subTotal }) => {
  return (
    <div className="d-flex justify-content-between" style={{padding: '15px 20px'}}>
      <p className={style.price_type}>Subtotal</p>
      <p className={`${style.price} mb-0`}>RS. {subTotal}</p>
    </div>
  );
};
