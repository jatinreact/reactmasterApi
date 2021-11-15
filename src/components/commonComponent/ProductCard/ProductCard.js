import React, {useContext,useState,useEffect} from "react";
import style from "./ProductCard.module.css";
import { MdShoppingCart } from "react-icons/md";
// import ShowReview from "./../ShowReview/ShowReview";
import { totalQuantity } from "../../../Utilis/GetTotalQuantity";
import { CardContext } from './../../../App';
// const btnList = ["ORIGINAL", "Chinese", "Used"];
import axios from 'axios'

const ProductCard = ({ product, productPage, dontShowDes }) => {


  const [ cardProductLength,setcardproductLength] = useContext(CardContext)
  // const [selected, setSelected] = useState("ORIGINAL"); 
  const handelAddToCard = (product) => {
    const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
    const findProduct = cardproducts.findIndex((pro) => pro.id === product.id);

    console.log(cardProductLength)
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
    <div
      className={`${
        productPage ? style.product_page_card : style.featured__product__card
      } card`}
    >
      <div className={style.card__image_wrapper}>
        <img className="card-img-top" src="/static/media/product2 (1).de472537.jpeg" alt={product.title} />
      </div>
      <div className="card-body">
        {/* <ShowReview product={product} /> */}
        <div className="pb-3">
          <h5 className={`card-title fs-15 white700 font_oswald fw-500`}>
            {product.description}
          </h5>
          
            <h5
              className={`${dontShowDes ? "d-none" : "d-block"} card-title fs-13 font_rubik white700 font_oswald fw-500`}
            >
              One stop solution for Luxury Auto Parts
            </h5>
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
        <div className={style.label_container}>
          {product.discount && (
            <div className={style.sale_label}>
              <span>-{product.discount}%</span>
            </div>
          )}
          {product.newProduct && (
            <div className={style.new_sale_label}>
              <span>New</span>
            </div>
          )}
          {product.sold && (
            <div className={style.new_sale_label}>
              <span>Sold</span>
            </div>
          )}
        </div>
        <div className={`${style.price} d-flex flex-wrap`}>
          {product.discount && (
            <p className={style.discount}>{product.discount}%</p>
          )}
          {product.newPrice && <p className="red me-3">${product.newPrice}</p>}
          <p
            className={
              product.newPrice
                ? `text-decoration-line-through ${style.old_price} fs-14`
                : "red"
            }
          >
            ${product.price}
          </p>
        </div>
        <div>
          <button onClick={() => handelAddToCard(product)} className={`${style.my_btn} fs-14 btn`}>
            <MdShoppingCart className="me-2" /> <span>add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
