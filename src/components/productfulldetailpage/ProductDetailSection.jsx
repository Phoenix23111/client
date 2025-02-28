import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { useCart } from "../../contexts/cart/CartContext";

const ProductDetailSection = ({ product, addToCartLogic }) => {
  const { addToCart } = useCart();
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const [discount, setDiscount] = useState(10);
  const [discountedValue, setDiscountedValue] = useState(0);
  let rating = 2.5,
    totalStars = 5;

  useEffect(() => {
    if (discount) {
      setDiscountedValue(
        product.price.value - (product.price.value * discount) / 100
      );
    }
  }, [discount, product.price.value]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextSlide(); // Swipe left → next slide
    } else if (info.offset.x > 50) {
      prevSlide(); // Swipe right → previous slide
    }
  };
  return (
    <>
      {product ? (
        <div className="relative flex flex-wrap flex-col md:flex-row w-full h-full bg-secondary p-2 md:p-5 rounded-xl overflow-hidden">
          {/* FEATURED TAG */}

          {/* image slider */}
          <div className="flex flex-1 flex-col flex-wrap md:mr-10">
            <div className="relative w-full h-[50vh] md:h-[70vh]  overflow-hidden rounded-lg  shadow-lg">
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence>
                  <motion.img
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    key={product.images[index].I_id}
                    src={product.images[index].src}
                    alt={`Slide ${product.images[index].I_id}`}
                    className="absolute w-full h-full object-contain bg-primary"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.75 }}
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-secondary/50 text-white p-1 md:p-2 h-full hover:bg-secondary/70"
              >
                <BsChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2  right-0 -translate-y-1/2 bg-secondary/50 text-white p-1 md:p-2 h-full hover:bg-secondary/70"
              >
                <BsChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-3 md:space-x-5">
                {product.images.map((_, i) => (
                  <div
                    key={i}
                    className={`md:w-7 md:h-1 w-5 h-0.5 transition-all ${
                      i === index
                        ? "bg-main scale-110 md:scale-125"
                        : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* image picker */}
            <div className="flex justify-center md:gap-4  transition-transform duration-700 ease-in-out w-full md:h-28 mt-4 border-2  bg-primary border-main rounded-lg ">
              <div className=" w-full  overflow-hidden box-border  ">
                <motion.div
                  ref={carouselRef}
                  className="flex gap-4 items-center justify-center mx-auto  w-full h-full box-border cursor-grab p-2"
                  drag="x"
                  dragConstraints={{
                    left: -((product.images.length - 1) * 200),
                    right: 0,
                  }}
                >
                  {product.images.map((image, i) => (
                    <motion.img
                      onClick={() => {
                        setIndex(i);
                      }}
                      key={image.I_id}
                      src={image.src}
                      draggable={false}
                      className={`${
                        index === i
                          ? "border-2 border-main bg-secondary"
                          : " border"
                      } h-12 w-12 lg:w-20 lg:h-20  flex items-center justify-center object-contain hover:bg-secondary hover:cursor-pointer  font-bold`}
                      whileHover={{ scale: 1.1 }}
                    ></motion.img>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          {/* Product Details */}
          <div className="flex flex-1 h-full flex-wrap max-sm:my-5 gap-4 md:gap-8  md:flex-col">
            {/* product Name */}
            <h1 className="text-main text-3xl md:text-5xl font-bold">
              {product.name}
            </h1>
            {product.Featured ? (
              <div className="md:absolute max-sm:hidden flex  text-center lg:text-xl font-semibold justify-center items-center bg-main text-white md:h-8 md:w-60 lg:h-10 lg:w-80 shadow-xl md:rotate-45 md:top-6 md:-right-20  lg:top-14 lg:-right-20 ">
                Featured
              </div>
            ) : (
              ""
            )}
            {/* Price section */}
            {discount ? (
              <>
                <div className="flex items-center w-full my-4  gap-8">
                  <div className="flex text-gray-400 text-md md:text-3xl gap-2 ">
                    <div className="line-through">
                      {product.price.unit + " " + product.price.value}
                    </div>
                    <div className=" text-main text-sm font-bold">
                      {discount}% OFF
                    </div>
                  </div>
                  <div className="flex text-main text-2xl md:text-4xl gap-2 font-semibold">
                    <div> {product.price.unit}</div>
                    <div> {discountedValue}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex text-main text-2xl md:text-4xl gap-2 font-semibold">
                <div> {product.price.unit}</div>
                <div> {product.price.value}</div>
              </div>
            )}
            {/* reviews */}
            <div className="flex items-center w-full space-x-1">
              {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const fillPercentage =
                  rating >= starValue
                    ? 100
                    : rating > index
                    ? (rating - index) * 100
                    : 0;

                return (
                  <div key={index} className="relative">
                    {/* Empty Star */}
                    <BsStarFill size={18} className="text-gray-300" />

                    {/* Filled Star Overlay */}
                    <div
                      className="absolute top-0 left-0 overflow-hidden"
                      style={{
                        width: `${fillPercentage}%`,
                        height: "100%",
                      }}
                    >
                      <BsStarFill size={18} className="text-main" />
                    </div>
                  </div>
                );
              })}
              <div className="text-main text-md px-5 ">123 reviews</div>
            </div>
            {/* Add to cart */}
            <div className="flex flex-1 w-full justify-around">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Prevents the click from bubbling up to the card
                  addToCart(product);
                  addToCartLogic();
                }}
                className="rounded-lg active:bg-teal-800 active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-main h-12 w-full text-white"
              >
                Add to Cart - {product.price.unit}{" "}
                {discount ? discountedValue : product.price.value}
              </button>
            </div>
            {/* span */}
            <span className="w-full border border-main"></span>
            {/* Descriptiomn */}
            <div className="flex flex-col">
              <h1 className="text-main font-bold text-lg">Description:</h1>
              <div>{product.description}</div>
            </div>
          </div>
        </div>
      ) : (
        <div> No Products Found </div>
      )}
    </>
  );
};

export default ProductDetailSection;
