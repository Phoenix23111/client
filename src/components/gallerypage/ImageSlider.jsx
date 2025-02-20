import React, { useCallback, useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const ImageSlider = ({ section, imageId }) => {
  const [current, setCurrent] = useState(0);
  const imagesLength = section.images.length;

  const previousSlide = () => {
    if (current === 0) setCurrent(imagesLength - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = useCallback(() => {
    if (current === imagesLength - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, imagesLength]);

  useEffect(() => {
    if (imageId !== null && imageId > 0 && imageId <= imagesLength) {
      setCurrent(imageId - 1);
    }
  }, [imageId, imagesLength]);

  return (
    <div className="relative flex  w-full h-full overflow-hidden rounded-lg">
      <div
        className=" flex transition-transform duration-700 ease-in-out "
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {section.images.map((image) => (
          <img
            key={image.imageid}
            src={image.src}
            alt={`Image ${image.id}`}
            className="w-full  object-contain flex justify-center items-center   bg-primary  flex-shrink-0 "
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 h-full w-full flex items-center justify-between text-black/60 px-4  text-3xl sm:text-4xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="absolute bottom-2 sm:bottom-4 py-2 flex justify-center gap-2 sm:gap-3 w-full">
        {section.images.map((image) => {
          return (
            <div
              onClick={() => setCurrent(image.imageid - 1)}
              key={"circle" + image.imageid - 1}
              className={`cursor-pointer lg:w-7 lg:h-1 sm:w-4 sm:h-1 ${
                image.imageid - 1 === current
                  ? "bg-main"
                  : "bg-transparent backdrop-blur-3xl brightness-200 "
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
