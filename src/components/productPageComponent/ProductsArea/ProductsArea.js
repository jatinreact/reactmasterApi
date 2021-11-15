import React,{useEffect,useState} from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";
import axios from 'axios';

const ProductsArea = () => {
const [setProductCardArr, setsetProductCardArr] = useState([]);




useEffect(() => {
  
  axios.get('https://arcane-river-72249.herokuapp.com/api/product/list').then((res) => {
    setsetProductCardArr(res.data.data);
      console.log("data in card :::",res);
  })
}, [])

  return (
    <div className="container">
      <ProductToolBar />
      <div className="row">
        {setProductCardArr.slice(0, 15).map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsArea;
