import React from "react";
import ProductsCategories from "./ProductsCategories";
import ProductsCarousel from "./ProductsCarousel";

const ProductsBody = ({addToCart}) => {
  return (
    <div className=" flex flex-col  h-full w-full py-16 gap-10 bg-primary">
      <ProductsCarousel />
      <ProductsCategories addToCart={addToCart}/>
    </div>
  );
};

export default ProductsBody;
