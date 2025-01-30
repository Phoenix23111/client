import React, { useEffect, useState } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";

const ArrowToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setScrollTop(true);
        setVisible(false);
      } else {
        setVisible(true);
        setScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`shadow-2xl  hover:cursor-pointer hover:bg-spearmint transition-all duration-500 flex justify-center w-12 h-12 rounded-full bg-main m-5 fixed text-white  bottom-24 right-10  items-center ${
        visible ? "block" : "hidden"
      } `}
    >
      <BiSolidArrowToTop className="text-3xl font-bold" />
    </div>
  );
};

export default ArrowToTop;
