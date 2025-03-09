import React from "react";
import { useCart } from "../../contexts/cart/CartContext";

const CartTotalPanel = () => {
  const { cartItems, totalProducts } = useCart();

  const totalValue = () => {
    let total = 0;
    if (cartItems) {
      for (let index = 0; index < cartItems.length; index++) {
        total += cartItems[index].price.value * cartItems[index].quantity;
      }
      return total;
    }

    return total;
  };

  return (
    <div className="flex w-full flex-col lg:w-[25%] bg-main rounded-xl h-96 p-5 shadow-xl">
      <div className="flex flex-col w-full mb-5 items-end divide-y-2 text-white divide-secondary space-y-5 h-full ">
        <div className="w-full flex text-2xl ">Summary</div>

        <div className="flex flex-1  w-full justify-between pt-5 h-full">
          <div>
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
          </div>
          <div>
            {cartItems.length > 0 ? cartItems[0].price.unit : "$"}{" "}
            {totalValue()}
          </div>
        </div>

        {/* Pushes Grand Total to the bottom */}
        <div className="flex justify-between w-full pt-5  ">
          <div className="  text-lg">Grand Total:</div>
          <div className="">
            {cartItems.length > 0 ? cartItems[0].price.unit : "$"}{" "}
            {totalValue()}
          </div>
        </div>
      </div>
      <button className="rounded-lg active:bg-secondary active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-primary h-12 w-full text-main">
        Proceed to chat
      </button>
    </div>
  );
};

export default CartTotalPanel;
