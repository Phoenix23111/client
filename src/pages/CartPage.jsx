import React, { useRef } from "react";
import ProductsNavbar from "../components/productspage/ProductsNavbar";
import CartBody from "../components/cartpage/CartBody";

const CartPage = () => {
  return (
    <div className=" grid w-full h-full">
      <ProductsNavbar />
      <CartBody />
    </div>
  );
};

export default CartPage;
