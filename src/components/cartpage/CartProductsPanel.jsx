import React, { useState } from "react";
import { useCart } from "../../contexts/cart/CartContext";
import {
  BsFileMinus,
  BsFillTrash3Fill,
  BsFillTrashFill,
  BsNodeMinus,
  BsPlus,
  BsTrash,
  BsTrash2,
  BsTrash3,
  BsTrash3Fill,
  BsTrashFill,
} from "react-icons/bs";

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
    <div className="flex w-full h-full  lg:w-[70%] ">
      <div className=" w-full overflow-x-auto  shadow-md rounded-lg">
        {totalProducts ? (
          <table className="w-full h-full text-sm text-left rtl:text-right text-black">
            <thead className=" text-center text-sm text-white uppercase bg-main w-full ">
              <tr>
                <th scope="col" className="px-6 py-3">
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
            <tbody>
              {cartItems.map((data, index) => {
                return totalProducts ? (
                  <tr
                    key={index}
                    onClick={onClickPanel}
                    className={`bg-primary border-b text-center  border-main h-40 w-full `}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div className="flex gap-2">
                        <div className="bg-secondary w-20 h-20">
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
                        <div>{data.name}</div>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      {data.price.unit} {data.price.value}
                    </td>
                    <td className=" flex justify-center items-center text-center  px-6 py-4 h-full">
                      <div className=" flex justify-center items-center  gap-4  border-2 border-main w-24 h-8  ">
                        <button
                          className=" w-8 flex justify-center  border-r-2 border-main items-center text-xl h-8 hover:bg-main hover:text-white"
                          onClick={() => increaseQuantity(data.P_id)}
                        >
                          <BsPlus />
                        </button>
                        {data.quantity}
                        <button
                          className=" w-8 flex justify-center items-center border-l-2  border-l-main text-xl h-8 hover:bg-main hover:text-white"
                          onClick={() => decreaseQuantity(data.P_id)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {data.price.unit} {data.price.value * data.quantity}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeFromCart(data.P_id)}
                        className="font-bold text-red-500 hover:text-red-900 "
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
