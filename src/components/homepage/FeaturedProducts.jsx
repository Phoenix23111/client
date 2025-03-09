import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProductsCard from "../productspage/ProductsCard";

function FeaturedProducts({ addToCartLogic }) {
  const navigate = useNavigate();
  const featuredSection = true;
  const productsCategoriesDataForCards = [
    {
      P_id: 0,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 1,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 2,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 3,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 4,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 5,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 6,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/bg-img.png", main: true },
        { I_id: 1, src: "", main: false },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 7,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Building Glass",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 8,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Shower Cabins",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 9,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Railings",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 10,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Skylights",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 11,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Tempering",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 12,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 13,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 14,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: false },
      ],
      quantity: 1,
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
  ];

  const FeaturedProducts = productsCategoriesDataForCards.filter(
    (data) => data.Featured === true
  );
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % FeaturedProducts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + FeaturedProducts.length) % FeaturedProducts.length
    );
  };

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
        <div className="relative w-full h-[70vh] bg-primary overflow-hidden  shadow-lg">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={FeaturedProducts[index].P_id}
                className="absolute  flex justify-center items-center "
                initial={{ opacity: 0, x: 100, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateX: 0,
                  scale: [1, 1.1, 1], // Breathing effect
                }}
                whileHover={{
                  scale: 1, // Stop breathing effect
                  transition: { duration: 0.2 }, // Instantly stop scaling
                }}
                exit={{ opacity: 0, x: -100, rotateX: 15 }}
                transition={{
                  duration: 0.75, // Smooth transition for slide-in/out
                  ease: "easeInOut",
                  scale: {
                    duration: 2, // Slow breathing effect
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -50) {
                    nextSlide();
                  } else if (info.offset.x > 50) {
                    prevSlide();
                  }
                }}
              >
                <ProductsCard
                  whileHover={{ scale: 1 }}
                  data={FeaturedProducts[index]}
                  addToCartModal={addToCartLogic}
                  featuredSection={featuredSection}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-secondary/50 text-black/50 font-extrabold p-1 md:p-2 rounded-full hover:bg-secondary/70"
          >
            <BiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2  right-0 -translate-y-1/2 bg-secondary/50 text-black/50 font-extrabold p-1 md:p-2 rounded-full hover:bg-secondary/70"
          >
            <BiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-3 md:space-x-5">
            {FeaturedProducts.map((_, i) => (
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
        <div className="flex justify-around p-10 ">
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="rounded-lg active:bg-teal-800 active:translate-y-1 active:transition-transform active:duration-300 active:ease-out font-semibold text-lg bg-main h-14 w-72 text-white"
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
