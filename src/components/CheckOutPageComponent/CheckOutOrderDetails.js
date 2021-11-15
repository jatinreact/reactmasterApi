import React from "react";
import style from "./CheckOutPageComponent.module.css";
import image from "./../../images/3.jpg";
import { Table} from "react-bootstrap"
import OrderPoroductList from "./OrderPoroductList";

const CheckOutOrderDetails = () => {
  return (
    <div className="container">
      <OrderPoroductList />
    </div>
  );
};

export default CheckOutOrderDetails;
