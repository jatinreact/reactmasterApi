import React, {useContext} from "react";
import image from "./../../images/3.jpg";
import ShowReview from "./../commonComponent/ShowReview/ShowReview";
import { useState } from "react";
import { productPageProductData } from "./../Data/ProductPageProductsData";
import style from "./ProductDetails.module.css";
import { MdFavorite } from "react-icons/md";
import {  MdShoppingCart } from "react-icons/md";
import { CardContext } from "../../App";
import { totalQuantity } from "../../Utilis/GetTotalQuantity";

// const btnList = ["ORIGINAL", "Chinese", "Used"];

const ProductSection = () => {
  // const [selected, setSelected] = useState("ORIGINAL"); 
  const [product] = useState(productPageProductData[0]);

  const [ cardProductLength,setcardproductLength] = useContext(CardContext)
  console.log(cardProductLength)
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


  return (
    <div className="container py-5">
      <div className="row">
        <div className={`${style.product_img} d-md-flex mb-4 mb-md-0 col-md-5 text-center`}>
          <img src={image} alt="" className={`rounded-18 `} />
        </div>
        <div className="col-md-7 mt-2 mt-md-0">
          <div>
            <h4 className={style.product_title}>
             {product.productTitle}
            </h4>
            <ShowReview product={product} />
            <p className={style.price}>RS. {product.price}</p>
            <p className={`${style.text} mb-0`}>
              Brand: <span className={"red"}>{product.brand}</span>
            </p>
            <p className={style.text}>
              Availability:<span className={"red"}>{product.availability? " In Stock": " Sold"} </span>
            </p>
          </div>
          <p className={style.text}>
            Born to be worn. Clip on the worlds most wearable music player and
            take up to 240 songs with you anywhere. Choose from five colors
            including four new hues to make your musical fashion statement.
            Random meets rhythm. With iTunes autofill, iPod shuffle can deliver
            a new musical experience every time you sync. For more randomness,
            you can shuffle songs...
          </p>
          <div>
            {/* <div className={style.btn_group}>
              {btnList.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(btn)}
                  className={`${style.my_btn} ${
                    selected === btn ? style.btn_selected : ""
                  } `}
                >
                  {btn}
                </button>
              ))}
            </div> */}
            <div className={` ${style.action_container} d-flex flex-wrap align-items-center`}>
              <div>
                <label htmlFor="qutantity" className={`me-3 ${style.text}`}>
                  Qty:
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className={`me-3 ${style.input}`}
                  id="qutantity"
                />
              </div>

              <div className="me-3">
                <button onClick = {() => handelAddToCard(product)} className={`${style.submit_btn} fs-14 btn `}>
                  <MdShoppingCart className="me-2" /> <span>add to cart</span>
                </button>
              </div>
              <div className={style.favorite_icon}>
                <MdFavorite />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
