import React, { useContext } from "react";
import "./CartPage.css"
import RelatedProducts from "../../components/ProductDetailsComponent/RelatedProducts";
import PageBanner from "../../components/commonComponent/PageBanner/PageBanner";

import { Link } from "react-router-dom";
import ProductDetails from "../../components/ProductDetailsComponent/ProductDetails";
import TecnicalData from "../../components/ProductDetailsComponent/TecnicalData";
import { CardContext } from "../../App";
import { Alert } from "react-bootstrap";
import { totalQuantity } from "../../Utilis/GetTotalQuantity";

const CartPage = () => {
  const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
  const [cardProductLength, setcardproductLength] = useContext(CardContext);

  let subTotal = 0;
  for (let i = 0; i < cardproducts.length; i++) {
    const product = cardproducts[i];
    const productPrice = product.price * product.quantity;
    subTotal = subTotal + productPrice;
  }


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
      <PageBanner title="Cart" dontShowTitle={true} menu={true} />
      <div
        style={{
          height: "500px",
          margin: "50px",
          position: "relative",
          padding: "5px 200px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            // borderBottom: "none",
          }}
          className=""
        >
          <div
            className="d-flex"
            style={{
              borderBottom: "1px solid black",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p style={{ margin: "0", padding: "10px 5px", width: "15%" }}>
              Image
            </p>
            <p
              // className="col-1"
              style={{
                margin: "0",
                padding: "10px 5px",
                borderLeft: "1px solid black",
                width: "25%",
              }}
            >
              Title
            </p>
            <p
              // className="col-1"
              style={{
                margin: "0",
                padding: "10px 5px",
                borderLeft: "1px solid black",
                width: "25%",
              }}
            >
              Quantity
            </p>
            <p
              // className="col-1"
              style={{
                margin: "0",
                padding: "10px 5px",
                borderLeft: "1px solid black",
                width: "15%",
              }}
            >
              Price
            </p>
            <p
              // className="col-1"
              style={{
                margin: "0",
                padding: "10px 5px",
                borderLeft: "1px solid black",
                width: "20%",
              }}
            >
              Total
            </p>
          </div>
          {cardproducts.length > 0 ? (
            cardproducts.map((product, index) => (
              <div
                className="d-flex align-content-center"
                style={{
                  borderBottom: "1px solid black",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <span
                  style={{ margin: "0", padding: "10px 5px", width: "15%" }}
                >
                  <img
                    src={product.image}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    alt=""
                    // className="w-20"
                  />
                </span>
                <p
                  // className="col-1 w-40"
                  style={{
                    margin: "0",
                    padding: "50px 5px",
                    borderLeft: "1px solid black",
                    width: "25%",
                  }}
                >
                  {product.productTitle}
                </p>
                {/* <p
                  // className="col-1 w-10"
                  style={{
                    margin: "0",
                    padding: "50px 5px",
                    borderLeft: "1px solid black",
                    width: "25%",
                  }}
                >
                  {product.quantity}
                </p> */}
                <div className="d-flex align-items-center justify-content-center" style={{
                    margin: "0",
                    padding: "43px 5px",
                    borderLeft: "1px solid black",
                    width: "25%",
                  }}>
                  <button
                    onClick={() => handelRemoveToCard(product)}
                    className="bgHover bg-gray text-black px-3 py-2 rounded-pill border-0"
                  >
                    -
                  </button>
                  <div className="counter">{product.quantity}</div>
                  <button
                    onClick={() => handelAddToCard(product)}
                    className="bgHover bg-gray text-black px-3 py-2 rounded-pill border-0"
                  >
                    +
                  </button>
                </div>
                <p
                  // className="col-1 w-20"
                  style={{
                    margin: "0",
                    padding: "50px 5px",
                    borderLeft: "1px solid black",
                    width: "15%",
                  }}
                >
                  {product.price}
                </p>
                <p
                  // className="col-1 w-10"
                  style={{
                    margin: "0",
                    padding: "50px 5px",
                    borderLeft: "1px solid black",
                    width: "20%",
                  }}
                >
                  {product.quantity * product.price}
                </p>
              </div>
            ))
          ) : (
            <Alert varient="danger">No product available in cart </Alert>
          )}
        </div>

        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
          <Link to="/check-out">
            <button type="button" className="btn btn-danger">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      <ProductDetails />
      <TecnicalData />
      <RelatedProducts />
    </div>
  );
};

export default CartPage;
