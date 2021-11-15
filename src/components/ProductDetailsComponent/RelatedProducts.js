import React from 'react';
import { productPageProductData } from './../Data/ProductPageProductsData';
import ProductCard from './../commonComponent/ProductCard/ProductCard';


const RelatedProducts = () => {
    return (
        <div className="container py-5">  
       <p className={`fs-30 text-center font_oswald mb-4`}>Related Product</p>
      <div className="row mt-5">
        {productPageProductData.slice(0, 4).map((product, index) => (
          <div key={index} className={` mb-4 col mb-4" responsive_product`}>
            <ProductCard dontShowDes= {true} product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default RelatedProducts;