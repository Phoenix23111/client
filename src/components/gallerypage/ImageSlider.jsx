import React, { useCallback, useEffect, useState } from "react";

const ImageSlider = ({ section }) => {
  const [current, setCurrent] = useState(0);
  const imagesLength = section.images.length;

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  }, [imagesLength]);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       nextSlide();
  //     }, 5000);
  //     return () => clearInterval(intervalId);
  //   }, [nextSlide]);

  return (
    <div className="relative w-full overflow-hidden mt-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${imagesLength * 100}%`,
        }}
      >
        {section.images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            className="w-full h-80 object-cover rounded-lg border flex-shrink-0"
            style={{ width: "100%" }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={previousSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
      <div className="absolute bottom-2 sm:bottom-4 py-2 flex justify-center gap-2 sm:gap-3 w-full">
        {section.images.map((image) => (
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
};

export default ImageSlider;
