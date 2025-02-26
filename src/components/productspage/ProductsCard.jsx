import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductsCard = ({ data }) => {
  const [currentCardData, setCurrentCardData] = useState();
  const navigate = useNavigate();
  const formatURL = (text) => text.toLowerCase().replace(/\s+/g, "-");
  const handleClickOnCard = () => {
    navigate(
      `/products/product-details/${formatURL(data.category)}/product_id:${
        data.P_id
      }`
    );
  };
  return (
    <div
      onClick={handleClickOnCard}
      className="shadow-lg lg:hover:shadow-lg  lg:hover:shadow-black/40 lg:hover:cursor-pointer lg:hover:scale-110 transition-all overflow-hidden duration-500 rounded-xl flex flex-col   items-center w-64 h-[22rem] md:w-72 md:h-96  m-4  backdrop-blur-sm bg-secondary/40 p-3 "
    >
      {/* image */}

      <div className=" w-full h-full overflow-hidden rounded-xl ">
        {data.images.map((image, index) => {
          if (image.main === true) {
            return (
              <img
                key={index}
                className="w-full h-full object-cover  "
                src={image.src}
                alt={"Image " + index}
                draggable={false}
              />
            );
          } else {
            return (
              <img
                key={index}
                className="w-full h-full object-cover  "
                src={""}
                alt={"Image " + index}
              />
            );
          }
        })}
      </div>

      <div className="w-full h-full text-center gap-1  flex flex-col ">
        {/* Header */}
        <div className="flex mt-3 gap-2 flex-col flex-1 w-full h-auto ">
          <div className="text-xl font-bold text-main">{data.name}</div>
          <div className="text-sm px-2 text-wrap">{data.description}</div>
        </div>
        <div className=" text-main flex justify-center items-center flex-1 w-full my-3 font-bold text-xl">
          Rs. {data.price.value + " " + data.price.unit}
        </div>
        <div className="flex flex-1 w-full justify-around">
          <button onClick={()=>{}} className="rounded-lg active:bg-teal-800 active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-main h-12 w-full text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
