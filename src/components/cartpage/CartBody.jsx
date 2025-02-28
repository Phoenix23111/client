import React from "react";
import CartProductsPanel from "./CartProductsPanel";
import CartTotalPanel from "./CartTotalPanel";

const CartBody = () => {
  return (
    <div className=" flex  justify-center  w-full mt-16 p-5  md:p-10 border-box gap-2 bg-secondary">
      <CartProductsPanel />
      <CartTotalPanel />
    </div>
  );
};

export default CartBody;
