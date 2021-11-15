import React, { useContext, useRef } from "react";
import { CardContext } from "../../App";
import { Badge } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import style from "./MenuBar.module.css";
import { useDetectOutsideClick } from "./OutsideClick";
import "./styles.css";
import { Link } from "react-router-dom";
import { SubTotalSummary } from "./SubTotalSummary";
import { Alert } from "react-bootstrap";

export const SmallMenu = () => {
  //   const [cardProductLength] = useContext(CardContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
  const [cardProductLength] = useContext(CardContext);
  console.log(cardproducts)

  let subTotal = 0;
  for (let i = 0; i < cardproducts.length; i++) {
    const product = cardproducts[i];
    const productPrice = product.price * product.quantity;
    subTotal = subTotal + productPrice;
  }

  return (
    <div>
      <button className="border-0 text-white menu-trigger" onClick={onClick}>
        <MdShoppingCart />
        <Badge bg="white" className={`${style.badged} text-dark`}>
          {cardProductLength}
        </Badge>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <div className="px-4 py-4">
              {cardproducts.length > 0 ? (
                cardproducts.map((product, index) => (
                  <div
                    key={index}
                    className={`${style.order_product_list} mb-3`}
                  >
                    <div className="d-flex align-items-center width-100%">
                      <div className={style.product_img_container}>
                        <img
                          src={product.image}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className={style.product_qountaty} style={{color:"black"}}>
                          {product.productTitle}
                        </span>
                        <span className={style.product_qountaty} style={{color:"darkgray" , fontSize: "12px"}}>
                          {product.quantity}
                        </span>
                        <span className={style.product_qountaty} style={{color:"red"}}>
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Alert varient="danger">No product available in cart </Alert>
              )}
            </div>
          </li>
          <li>
            <SubTotalSummary subTotal={subTotal} />
          </li>
          <li className="m-0 p-0">
            <div
              className="d-flex align-items-center width-100% justify-content-center bg-dark"
              style={{ display: "block", border: "none", padding: "20px 20px" }}
            >
              <Link to="/cart">
                <button className="bgHover bg-white text-black px-5 py-2 rounded-pill border-0">
                  Cart
                </button>
              </Link>
              <Link to="/check-out">
                <button className="bgHover bg-white text-black px-5 py-2 rounded-pill border-0">
                  Checkout
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
