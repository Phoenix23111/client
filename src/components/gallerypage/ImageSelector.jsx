import React from "react";

const ImageSelector = ({ section, setImageId }) => {
  return (
    <div className="flex justify-center md:gap-4  transition-transform duration-700 ease-in-out w-full md:h-28 mt-4 border-2 p-2 bg-primary border-main rounded-lg ">
      {section.images.map((image, index) => {
        return (
          <div
            key={image.imageid || index}
            onClick={() => {
              setImageId(image.imageid);
            }}
            className="relative flex md:h-16 lg:h-24 hover:cursor-pointer rounded-lg p-2 hover:bg-secondary transition-all duration-500 ease-in-out "
          >
            <img
              key={index}
              src={image.src}
              alt={`Image ${image.imageid}`}
              className="w-28 h-12 md:w-36 md:h-20 object-cover object-left-top z-20 "
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSelector;
