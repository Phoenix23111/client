import React from "react";
import CartProductsPanel from "./CartProductsPanel";
import CartTotalPanel from "./CartTotalPanel";

const CartBody = () => {
  return (
    <div className=" flex min-h-screen  w-full  md:pt-28  p-5  md:p-10 box-border gap-2 bg-secondary">
      <CartProductsPanel />
      <CartTotalPanel />
    </div>
  );
};

export default CartBody;
