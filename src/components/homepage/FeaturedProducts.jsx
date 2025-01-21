import React from "react";
import ProductCardHome from "../products/ProductCardHome";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import prod1img from "../../../public/images/prod1img.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.jpg";
import image1 from "../../../public/images/image1.jpg";

function FeaturedProducts() {
  return (
    <>
      <div className="flex flex-col w-full bg-gray-100  h-full">
        <div className="flex items-center justify-center text-5xl font-bold py-10 ">
          Featured Products
        </div>
        <span className=" flex w-full px-96 items-center justify-center">
          <span className="border flex1 w-[25%] border-black"></span>
          <span className="border flex1 w-[50%] h-2 bg-green-600 border-green-600"></span>
          <span className="border flex1 w-[25%] border-black"></span>
        </span>
        <div className=" bg-[url('/images/fprodbg.jpg')] bg-cover p-10 mt-10">
          <div className=" relative flex h-auto justify-center items-center p-10  ">
            <ProductCardHome
              prodName="Product 1"
              prodDesc="This is Product Description of Product 1"
              prodPrice="2000"
              prodSrc={prod1img}
            />
            <ProductCardHome
              prodName="Product 2"
              prodDesc="This is Product Description of Product 2"
              prodPrice="1000"
              prodSrc={image2}
            />
            <ProductCardHome
              prodName="Product 3"
              prodDesc="This is Product Description of Product 3"
              prodPrice="1240"
              prodSrc={image3}
            />
            <ProductCardHome
              prodName="Product 4"
              prodDesc="This is Product Description of Product 4"
              prodPrice="1650"
              prodSrc={image1}
            />

            <div className="hover:cursor-pointer absolute top-1/2 left-3 text-white/80 text-4xl">
              <BsArrowLeftCircleFill />
            </div>
            <div className="hover:cursor-pointer absolute top-1/2 right-3 w-auto h-auto text-white/80 rounded-full text-4xl">
              <BsArrowRightCircleFill />
            </div>
          </div>
          <div className="mt-10 w-full flex justify-center items-center">
            <button className=" active:bg-green-400 active:translate-y-0 active:transition-transform active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-green-500 h-12 w-48 drop-shadow-xl rounded-lg hover:scale-105 hover:-translate-y-2  hover:transition-transform hover:duration-500 hover:ease-in-out ">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
