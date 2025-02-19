import React from "react";
import ProductCardHome from "../productspage/ProductCardHome";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import prod1img from "/images/prod1img.jpg";
import image2 from "/images/image2.jpg";
import image3 from "/images/image3.jpg";
import image1 from "/images/image1.jpg";

function FeaturedProducts() {
  return (
    <>
      <div className="flex flex-col w-full bg-primary  h-full">
        <div className="text-main flex items-center justify-center text-4xl md:text-5xl  font-bold py-10 ">
          Featured Products
        </div>
        <span className=" flex w-full px-24 md:px-96 items-center justify-center">
          <span className="border flex1 w-[25%] border-black"></span>
          <span className="border flex1 w-[50%] h-2 bg-secondary border-secondary"></span>
          <span className="border flex1 w-[25%] border-black"></span>
        </span>
        <div className=" bg-primary  p-10 mt-10">
          <div className=" relative flex flex-wrap h-auto justify-center items-center p-10  ">
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
            <button className="text-white active:bg-teal-800 active:translate-y-0 active:transition-transform active:duration-100 duration-500 ease-in-out font-semibold text-lg bg-main h-12 w-48 shadow-xl drop-shadow-xl rounded-lg hover:scale-105 hover:-translate-y-2  hover:transition-transform hover:duration-500 hover:ease-in-out ">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
