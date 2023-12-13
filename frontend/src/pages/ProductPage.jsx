import React from "react";
import Product from "../components/Product";
import Basket from "../components/Basket";

const ProductPage = () => {
  return <React.Fragment>
    <Basket/>
    <Product />
  </React.Fragment>;
};

export default ProductPage;
