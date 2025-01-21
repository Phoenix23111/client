import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

import icons8usercircle from "../../../public/images/icons8-user-circle-96.png";

function Navbar({ onAboutUsClick, onContactUsClick }) {
  const [count, setCount] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolling(scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          scrolling ? "bg-transparent" : "bg-white "
        } flex justify-around fixed transition-all duration-700 ease-out  z-20 backdrop-blur-md backdrop-brightness-125 h-20 items-center w-full`}
      >
        <div className=" w-auto box-border">
          <a href="/">
            <img
              src="https://dsstore.com.pk/imgs/logo.svg"
              alt=" logo"
              className="w-auto size-12"
            />
          </a>
        </div>

        <div className="flex gap-8">
          <button onClick={onAboutUsClick} className=" font-bold">
            About Us
          </button>
          <div className=" font-bold"> Gallery</div>
          <div className=" font-bold"> Product</div>
          <button onClick={onContactUsClick} className=" font-bold">
            Contact Us
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <BiSearchAlt size={25} />
          </div>
          <div className="relative ">
            <div className="absolute -top-2 -right-2 bg-green-600  text-white rounded-full font-bold w-5 h-5 text-xs flex items-center justify-center">
              {count}
            </div>
            <BsCart2 size={25} />
          </div>
          <div className=" sm ml-5 h-full w-full flex items-center gap-2 ">
            <button className=" rounded-full w-12 h-12 felx items-center overflow-hidden object-cover ">
              <img
                className="w-full h-full object-cover bg-white"
                src={icons8usercircle}
                alt=""
              />
            </button>
            {/* <div>
              <h4>Welcome User!</h4>
              <p>Sign In</p>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
