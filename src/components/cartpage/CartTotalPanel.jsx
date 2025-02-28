import React from "react";
import { useCart } from "../../contexts/cart/CartContext";

const CartTotalPanel = () => {
  const { cartItems } = useCart();
  const totalValue = "";
  return (
    <div className="flex w-full lg:w-[30%] border border-black rounded-xl h-96">
      CartTotalPanel
    </div>
  );
};

export default CartTotalPanel;
