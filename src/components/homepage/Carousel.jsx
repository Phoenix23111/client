import React, { useState, useEffect, useCallback } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import image1 from "/images/image1.jpg";
import image2 from "/images/image2.jpg";
import image3 from "/images/image3.jpg";

function Carousel() {
  const images = [
    { id: 1, src: image1, alt: "Slide 1" },
    { id: 2, src: image2, alt: "Slide 2" },
    { id: 3, src: image3, alt: "Slide 3" },
  ];
  let [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = useCallback(() => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);
  return (
    <div className="overflow-hidden relative h-[40vh]  sm:h-[50vh] md:h-[70vh] lg:h-screen">
      {/* Slides */}
      <div
        className="flex transition-transform duration-[1500ms] h-full ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt=""
            className="w-full filter brightness-50  h-full object-cover"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 h-full w-full flex items-center justify-between text-white/60 px-4 sm:px-6 lg:px-10 text-3xl sm:text-4xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 py-2 flex justify-center gap-2 sm:gap-3 w-full">
        {images.map((image) => (
          <div
            onClick={() => setCurrent(image.id - 1)}
            key={"circle" + image.id - 1}
            className={`cursor-pointer lg:w-7 lg:h-1 sm:w-4 sm:h-1 ${
              image.id - 1 === current
                ? "bg-main"
                : "bg-transparent backdrop-blur-3xl brightness-200 "
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
