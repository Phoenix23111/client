import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
import image1 from "/images/image1.jpg";
import image2 from "/images/authpagebg.png";
import image3 from "/images/image3.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProductsCarousel = () => {
  //dummy data will use fetch api
  const images = [
    { id: 1, src: image1, alt: "Slide 1" },
    { id: 2, src: image2, alt: "Slide 2" },
    { id: 3, src: image3, alt: "Slide 3" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextSlide(); // Swipe left → next slide
    } else if (info.offset.x > 50) {
      prevSlide(); // Swipe right → previous slide
    }
  };
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] bg-secondary overflow-hidden  shadow-lg">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          <motion.img
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            key={images[index].id}
            src={images[index].src}
            alt={`Slide ${images[index].id}`}
            className="absolute w-full h-full object-contain bg-secondary rounded-lg"
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
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-main/50 text-black/50 font-extrabold p-1 md:p-2 rounded-full hover:bg-secondary/70"
      >
        <BiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2  right-0 -translate-y-1/2 bg-main/50 text-black/50 font-extrabold p-1 md:p-2 rounded-full hover:bg-main/70"
      >
        <BiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-3 md:space-x-5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`md:w-7 md:h-1 w-5 h-0.5 transition-all ${
              i === index ? "bg-main scale-110 md:scale-125" : "bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
