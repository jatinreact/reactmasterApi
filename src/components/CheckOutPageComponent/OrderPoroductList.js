import React, { useState, useEffect, useContext } from "react";
import style from "./CheckOutPageComponent.module.css";
// import { orderProductList } from "./../Data/OrderProductData";
import {
  MdShoppingCart,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import OrderPriceSummary from "./OrderPriceSummary";
import { Alert } from "react-bootstrap";
import { CardContext } from "../../App";
import { totalQuantity } from "../../Utilis/GetTotalQuantity";
import { useHistory } from "react-router";
import axios from "axios";

// import logo from "../../images/logo.png";

const OrderPoroductList = (props) => {
  const proceeds = (totalamt) => {
    var options = {
      key: "rzp_test_uTclrxW2sTaEqj",
      amount: totalamt,
      currency: "INR",
      name: "LAMBORGHINI",
      description: "Test Transaction",
      image:
        "https://www.freepnglogos.com/uploads/lamborghini-png/lamborghini-png-transparent-lamborghini-images-5.png",
      order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      // "prefill": {
      //     "name": "Gaurav Kumar",
      //     "email": "gaurav.kumar@example.com",
      //     "contact": "9999999999"
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };

  const [amount, setamount] = useState("");
  const [receipt, setreceipt] = useState("");

  const Registerdata = () => {
    try {
      let url =
        "https://arcane-river-72249.herokuapp.com/api/payments/payment-order";
      let temp = {
        amount,
        receipt,
      };
      axios.post(url, temp).then(
        (res) => {
          console.log("data response:::", res);
        },
        (error) => {
          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      console.log("data response error:::", error);
    }
  };

  const history = useHistory();
  const [show, setShow] = useState(false);
  const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
  const [cardProductLength, setcardproductLength] = useContext(CardContext);
  console.log(cardProductLength);
  let subTotal = 0;
  for (let i = 0; i < cardproducts.length; i++) {
    const product = cardproducts[i];
    const productPrice = product.price * product.quantity;
    subTotal = subTotal + productPrice;
  }

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 992) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handelAddToCard = (product) => {
    const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
    const findProduct = cardproducts.findIndex((pro) => pro.id === product.id);

    if (findProduct < 0) {
      product["quantity"] = 1;
      cardproducts.push(product);
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
      setcardproductLength(Quantity);
    } else {
      const exestProduct = cardproducts[findProduct];
      exestProduct.quantity += 1;
      cardproducts[findProduct] = exestProduct;
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
      setcardproductLength(Quantity);
    }
  };
  const handelRemoveToCard = (product) => {
    const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
    const findProduct = cardproducts.findIndex((pro) => pro.id === product.id);

    if (findProduct < 0) {
      product["quantity"] = 1;
      cardproducts.push(product);
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
      setcardproductLength(Quantity);
    } else {
      const exestProduct = cardproducts[findProduct];
      exestProduct.quantity -= 1;
      cardproducts[findProduct] = exestProduct;
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
      setcardproductLength(Quantity);
    }
  };

  return (
    <div>
      <div className="d-block d-lg-none  pb-4 bg-white">
        <p className={`${style.logo} mb-0 container`}>LAMBORGHINI</p>
      </div>
      <div
        className={` d-block d-lg-none mb-2 ${style.show_hide_sidebar}`}
        onClick={() => setShow(!show)}
      >
        <div className="container d-flex justify-content-between align-items-center py-3">
          <p className="text-sky cursor-ponter mb-0">
            <span>
              <MdShoppingCart />
            </span>{" "}
            <span>{show ? "Hide order summary" : "Show order summary"}</span>{" "}
            <span>
              {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </p>
          <p className={`${style.acc_grand_total} cursor-ponter mb-0`}>
            RS. 156785
          </p>
        </div>
      </div>
      <div
        className={`${style.product_conatiner} ${
          show ? "d-block" : "d-none"
        } container`}
      >
        {cardproducts.length > 0 ? (
          cardproducts.map((product, index) => (
            <div key={index} className={`${style.order_product_list} mb-3`}>
              <div className="d-flex justify-content-between align-items-center width-100%">
                <div className={style.product_img_container}>
                  <img src={product.image} alt="" />
                  <span className={style.product_qountaty}>
                    {product.quantity}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => handelRemoveToCard(product)}
                    className={style.actionBtn}
                  >
                    -
                  </button>
                  <div className={style.counter}>{product.quantity}</div>
                  <button
                    onClick={() => handelAddToCard(product)}
                    className={style.actionBtn}
                  >
                    +
                  </button>
                </div>
                <div className={style.product_des}>
                  <p>{product.title}</p>
                  <p>RS. {product.price * product.quantity}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Alert varient="danger">No product available in cart </Alert>
        )}
        <OrderPriceSummary subTotal={subTotal} />
      </div>

      <div className="payment_btn text-center mt-5">
        <button className="pay_btn" onClick={() => proceeds(subTotal)}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default OrderPoroductList;
