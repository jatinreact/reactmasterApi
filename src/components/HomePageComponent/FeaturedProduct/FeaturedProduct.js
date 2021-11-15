import React, { useState, useContext, useEffect } from "react";
import style from "./featured-product.module.css";
import { MdShoppingCart } from "react-icons/md";
// import { FeaturedProducts } from "../../Data/FearuredProductData";
import ShowReview from "./../../commonComponent/ShowReview/ShowReview";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import { CardContext } from "./../../../App";
import { totalQuantity } from "../../../Utilis/GetTotalQuantity";
// import { animated } from "react-spring";
// import { use3dEffect } from "use-3d-effect";
import axios from "axios";

// const btnList = ["ORIGINAL", "Chinese", "Used"];
const FeaturedProduct = () => {
  const [productDataArr, setproductDataArr] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://lambhoghini.herokuapp.com/api/v1.1/product")

        .then((res) => {
          console.log("datafirst:::", res);
          setproductDataArr(res.data.data);
        });
    } catch (error) {}
  }, []);

  const [cardProductLength, setcardproductLength] = useContext(CardContext);
  // const [selected, setSelected] = useState("ORIGINAL");
  // const ref = React.useRef(null);
  // const { style, ...mouseHandlers } = use3dEffect(ref);

  const handelAddToCard = (product) => {
    const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
    const findProduct = cardproducts.findIndex((pro) => pro.id === product.id);
    console.log(cardProductLength);

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

  return (
    <div className="row mt-5">
      {productDataArr.length > 0 &&
        productDataArr.slice(0, 3).map((product, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0 ">
            <div className={`${style.featured__product__card} card`}>
              <div className={style.card__image_wrapper}>
                <img
                  className="card-img-top"
                  src="/static/media/product1(1).c1840af9.jpg"
                  alt={product.productTitle}
                />
              </div>
              <div className="card-body">
                <ShowReview product={product} />
                <div className="pb-4">
                  <h5 className={`card-title white700 ${style.title}`}>
                    {product.title}
                  </h5>
                  <h5
                    className={`card-title fs-13 font_rubik white700 font_oswald fw-500`}
                  >
                    {product.description}
                  </h5>
                  {/* <p className={`card-text white200 ${style.description}`}>
                    {product.description}
                  </p> */}
                  {/* <div className={style.btn_group}>
                    {btnList.map((btn, index) => (
                      <button
                        key={index}
                        onClick={() => setSelected(btn)}
                        className={`${style.my_btnn} ${
                          selected === btn ? style.btn_selected : ""
                        } `}
                      >
                        {btn}
                      </button>
                    ))}
                  </div> */}
                </div>
                <div className={`${style.price} font_oswald`}>
                  <p className="">RS.{product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => handelAddToCard(product)}
                    className={`${style.my_btn} d-flex align-items-center justify-content-center font_oswald btn`}
                  >
                    <MdShoppingCart className="me-2" /> <span>add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedProduct;
