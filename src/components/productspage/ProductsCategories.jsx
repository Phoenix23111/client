import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductsCard from "./ProductsCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCategorySlider from "./ProductCategorySlider";

const ProductsCategories = ({ addToCart }) => {
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

  // Store Refs & States for Each Category
  const categoryRefs = useRef({});
  const [scrollPositions, setScrollPositions] = useState({});

  // Only update state if values actually change to prevent unnecessary re-renders

  const handleScroll = (category) => {
    if (categoryRefs.current[category]) {
      setScrollPositions((prev) => ({
        ...prev,
        [category]: categoryRefs.current[category].scrollLeft,
      }));
    }
  };

  const scrollLeft = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollLeft -= 1000;
      setTimeout(() => handleScroll(category), 200);
    }
  };

  const scrollRight = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollLeft += 1000;
      setTimeout(() => handleScroll(category), 200);
    }
  };
  const FeaturedProducts = productsCategoriesDataForCards.filter(
    (data) => data.Featured === true
  );
  const [index, setIndex] = useState(0);

  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
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
  const scrollToCategory = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col   box-border">
      <div className="flex flex-col gap-10 px-5 md:px-10">
        <div className="relative flex flex-col w-full py-5 bg-secondary/20 shadow-2xl backdrop-blur-md rounded-xl  box-border">
          <h1 className="flex flex-col text-3xl w-full font-extrabold text-main mb-4 px-5 md:px-10">
            Featured Products
            <span className="w-full border border-main"></span>
          </h1>

          <div className="relative w-full px-5">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-[70vh]  bg-transparent overflow-hidden  ">
              <div className="relative w-full h-full  flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={FeaturedProducts[index].P_id}
                    className="absolute w-full h-full flex justify-center items-center"
                    initial={{ opacity: 0, x: 100, rotateX: -15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotateX: 0,
                      scale: [1, 1.1, 1], // Breathing effect
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
                      data={FeaturedProducts[index]}
                      addToCartModal={addToCart}
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
          </div>
        </div>
        <ProductCategorySlider onCategoryClick={scrollToCategory} />
        {productsCategoriesData.map((category, index) => {
          const categoryProducts = productsCategoriesDataForCards.filter(
            (data) => data.category === category
          );

          if (categoryProducts.length === 0) return null;

          return (
            <>
              <div
                key={index}
                ref={(el) => (categoryRefs.current[category] = el)}
                className="relative flex flex-col w-full py-5 px-5 bg-secondary/20 shadow-2xl backdrop-blur-md rounded-xl"
              >
                <h1 className="flex flex-col text-3xl font-extrabold  text-main mb-4 px-5 md:px-10">
                  {category}
                  <span className="w-full border border-main"></span>
                </h1>

                <div className="relative w-full">
                  {/* Left Button */}
                  <button
                    onClick={() => scrollLeft(category, "left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full shadow-md hover:bg-white/70"
                  >
                    <BiChevronLeft size={24} />
                  </button>

                  {/* Carousel Wrapper */}
                  <motion.div
                    ref={(el) => (categoryRefs.current[category] = el)}
                    className="flex h-[65vh]  items-center gap-10 md:gap-16 overflow-x-auto scroll-smooth overflow-hidden px-5 pe-14 scrollbar-hide"
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                  >
                    {categoryProducts.map((data) => (
                      <motion.div
                        key={data.P_id}
                        className="w-64 md:w-72 flex-shrink-0"
                      >
                        <ProductsCard data={data} addToCartModal={addToCart} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Right Button */}
                  <button
                    onClick={() => scrollRight(category, "right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50  p-2 rounded-full shadow-md hover:bg-white/70"
                  >
                    <BiChevronRight size={24} />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCategories;
