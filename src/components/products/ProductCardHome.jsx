import React, { useState } from "react";

function ProductCardHome({ prodName, prodDesc, prodPrice, prodSrc }) {
  const [isDiscount, setIsDiscount] = useState(false);
  const handleDiscounts = () => {
    if (isDiscount) {
      setIsDiscount(true);
    } else {
      setIsDiscount(false);
    }
  };

  return (
    <div className=" last:p-0 hover:shadow-2xl hover:shadow-white/40 hover:cursor-pointer hover:scale-110 transition-all overflow-hidden duration-500 rounded-md flex flex-col  items-center w-72 h-96  m-5 bg-transparent backdrop-blur-lg backdrop-brightness-125 p-2  shadow-inherit">
      {/* image */}
      <div className=" w-full h-full overflow-hidden ">
        <img
          className="w-full h-full object-cover  "
          src={prodSrc}
          alt="meow"
        />
      </div>

      <div className="w-full h-full text-center gap-1  flex flex-col ">
        {/* Header */}
        <div className="flex mt-3 gap-2 flex-col flex-1 w-full h-auto ">
          <div className="text-xl font-bold">{prodName}</div>
          <div className="text-sm text-white px-2 text-wrap">{prodDesc}</div>
        </div>
        <div className=" text-gray-800 flex justify-center items-center flex-1 w-full my-3 font-bold text-xl">
          Rs. {prodPrice}
        </div>
        <div className="flex flex-1 w-full justify-around">
          <button className="active:bg-green-400 active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-green-500 h-12 w-full drop-shadow-xl rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardHome;
