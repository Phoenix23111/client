import React, { useState } from "react";
import { useCart } from "../../contexts/cart/CartContext";
import { BsFillTrashFill, BsPlus } from "react-icons/bs";

const CartProductsPanel = () => {
  const [color, setColor] = useState("");
  const {
    cartItems,
    totalProducts,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const onClickPanel = () => {
    setColor("border border-main");
  };

  return (
    <div className={` w-full  lg:w-[75%] h-full `}>
      <div
        className={`w-full  overflow-hidden shadow-md rounded-lg ${
          totalProducts ? "" : "h-full"
        } `}
      >
        {totalProducts ? (
          <table className="w-full h-full rounded-xl  text-sm md:text-base text-left  text-black ">
            <thead className=" text-center text-sm text-white uppercase bg-main w-full rounded-xl ">
              <tr>
                <th scope="col" className="w-[50%] px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>

                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-full  ">
              {cartItems.map((data, index) => {
                return totalProducts ? (
                  <tr
                    key={index}
                    onClick={onClickPanel}
                    className={`bg-primary border-b text-center  border-main h-40 w-full `}
                  >
                    <th
                      scope="row"
                      className="flex w-full px-4 py-4 font-medium   h-full"
                    >
                      <div className="flex gap-2 items-center w-full h-full ">
                        <div className="bg-secondary w-40 h-full flex items-center justify-center ">
                          {cartItems !== 0 &&
                            data?.images?.map(
                              (img, index) =>
                                img.main && (
                                  <img
                                    key={index}
                                    src={img.src}
                                    className="w-full h-full object-contain"
                                  />
                                )
                            )}
                        </div>
                        <div className="flex flex-col text-start  h-full gap-3 w-full">
                          <div className="text-2xl text-main font-bold">
                            {" "}
                            {data.name}
                          </div>
                          <div className="text-sm text-main/80">
                            {data.category}
                          </div>
                          <div>{data.description}</div>
                        </div>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      {data.price.unit} {data.price.value}
                    </td>
                    <td className="px-6 py-4 h-full  ">
                      <div className="flex justify-center ">
                        <div className="flex  w-24 h-10  justify-center border-2 border-main  items-center gap-4">
                          <button
                            className="w-8 flex justify-center items-center text-xl h-10 bg-main text-white active:bg-transparent active:border-r-2 active:border-main active:text-main"
                            onClick={() => increaseQuantity(data.P_id)}
                          >
                            <BsPlus />
                          </button>
                          {data.quantity}
                          <button
                            className="w-8 flex justify-center items-center text-xl h-10 bg-main text-white active:bg-transparent active:border-l-2 active:border-main active:text-main"
                            onClick={() => decreaseQuantity(data.P_id)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-bold ">
                      {data.price.unit} {data.price.value * data.quantity}
                    </td>
                    <td className="px-6 py-4 ">
                      <button
                        onClick={() => removeFromCart(data.P_id)}
                        className="font-bold text-red-500 hover:text-red-900"
                      >
                        <BsFillTrashFill size={24} />
                      </button>
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="w-full h-full border-2 text-main font-bold text-6xl border-main bg-primary/40 rounded-xl backdrop-blur-md flex justify-center items-center ">
            No Products in cart
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProductsPanel;
