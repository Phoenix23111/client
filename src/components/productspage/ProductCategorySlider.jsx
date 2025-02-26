import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProductCategorySlider = ({ onCategoryClick }) => {
  const productsCategoriesData = [
    "Featured Products",
    "Decorative Glass",
    "Building Glass",
    "Shower Cabins",
    "Glass Railings",
    "Glass Skylights",
    "Glass Tempering",
    "Glass Double Glazing",
    "Glass Bending",
    "LED Mirrors",
    "Wallpapers",
    "uPVC Windows",
    "Aluminium Windows",
    "Tensile Shed",
    "Wrought iron",
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500; // Adjust scroll distance as needed
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="relative flex py-5 px-8 md:px-10 w-full">
      {/* scroll buttons */}
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10   rounded-full"
      >
        <BiChevronLeft className="text-main text-4xl" />
      </button>
      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute flex right-0  z-10  rounded-full"
      >
        <BiChevronRight className="text-main text-4xl" />
      </button>
      <div
        ref={scrollRef}
        className=" flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide rounded-lg"
      >
        {productsCategoriesData.map((data, index) => {
          return (
            <div
              onClick={() => onCategoryClick(data)}
              className="w-full text-nowrap active:border font-semibold bg-main text-white active:bg-transparent active:border-main active:text-main p-2 box-border rounded-lg cursor-pointer"
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategorySlider;
