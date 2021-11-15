import React from 'react';
import ProductPageLayout from '../../components/productPageComponent/ProductPageLayout/ProductPageLayout';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';


const ProductPage = () => {
    return (
        <>
           <PageBanner title="Product" menu={true}/>
           <ProductPageLayout />
        </>
    );
};

export default ProductPage;