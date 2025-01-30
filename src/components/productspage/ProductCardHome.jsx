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
    <div className="shadow-2xl  hover:shadow-2xl hover:shadow-black/40 hover:cursor-pointer hover:scale-110 transition-all overflow-hidden duration-500 rounded-xl flex flex-col   items-center w-72 h-96  m-5  backdrop-blur-sm bg-secondary/70 p-3 ">
      {/* image */}
      <div className=" w-full h-full overflow-hidden rounded-xl ">
        <img
          className="w-full h-full object-cover  "
          src={prodSrc}
          alt="meow"
        />
      </div>

      <div className="w-full h-full text-center gap-1  flex flex-col ">
        {/* Header */}
        <div className="flex mt-3 gap-2 flex-col flex-1 w-full h-auto ">
          <div className="text-xl font-bold text-main">{prodName}</div>
          <div className="text-sm px-2 text-wrap">{prodDesc}</div>
        </div>
        <div className=" text-main flex justify-center items-center flex-1 w-full my-3 font-bold text-xl">
          Rs. {prodPrice}
        </div>
        <div className="flex flex-1 w-full justify-around">
          <button className="rounded-lg active:bg-teal-800 active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-main h-12 w-full text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardHome;
