import React, { useState, useEffect, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import logo from "/images/logo.png";
import logotxt from "/images/dss.png";
import { BiUserCircle } from "react-icons/bi";
import { Navigate, useLocation } from "react-router-dom";

import icons8usercircle from "/images/icons8-user-circle-96.png";
import { Link } from "react-router-dom";

function Navbar({ onAboutUsClick, onContactUsClick }) {
  const [count, setCount] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [accountSectionOpen, setAccountSectionOpen] = useState(false);

  const handleAccountModal = () => {
    if (accountSectionOpen === true) {
      setAccountSectionOpen(false);
      console.log(accountSectionOpen);
    } else {
      setAccountSectionOpen(true);
      console.log(accountSectionOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position
      setScrolling(currentScrollY > 100);
      // Check if scrolling up
      if (currentScrollY < lastScrollY.current) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`text-main flex shadow-2xl justify-between px-6 md:px-20 transition-all w-screen duration-700 ease-out z-20 h-20 items-center fixed    ${
          scrolling && !isScrollingUp
            ? "opacity-0 -translate-y-20 "
            : "opacity-100 bg-secondary"
        }`}
      >
        <div>
          <Link to={"/"} className="flex justify-center items-center gap-4 ">
            <img src={logo} alt=" logo" className="w-auto size-14" />
            <img src={logotxt} alt=" logo" className="w-auto size-16" />
          </Link>
        </div>

        <div className="flex gap-8">
          <button onClick={onAboutUsClick} className=" font-bold">
            About Us
          </button>
          <div className=" font-bold"> Gallery</div>
          <Link to={"/products"}>
            <div className=" font-bold"> Products</div>
          </Link>
          <button onClick={onContactUsClick} className=" font-bold">
            Contact Us
          </button>
        </div>

        <div className="relative flex gap-3 items-center">
          <div>
            <BiSearchAlt size={25} />
          </div>
          <div className="relative ">
            <Link to={"/cart"}>
              <div className="absolute -top-2 -right-2 bg-main  text-white rounded-full font-bold w-5 h-5 text-xs flex items-center justify-center">
                {count}
              </div>
              <BsCart2 size={25} />
            </Link>
          </div>
          <div
            onClick={handleAccountModal}
            className="hover:cursor-pointer  ml-5 h-full w-full flex items-center gap-2 "
          >
            <button className=" rounded-full w-12 text-9xl p-0 bg-secondary h-12 flex items-center overflow-hidden object-cover ">
              {/* <img
                className="w-full h-full object-cover bg-white"
                src={icons8usercircle}
                alt=""
              /> */}
              <BiUserCircle className="" />
            </button>

            {/* <div>
              <h4>Welcome User!</h4>
              <p>Sign In</p>
            </div> */}
          </div>
        </div>

        {/* Account Modal before SignUP */}
        <div
          role="dialog"
          aria-label="Account Modal"
          className={`absolute top-24 right-24 w-60 h-36  rounded-lg rounded-tr-none p-2 bg-secondary transition-all duration-500 ${
            accountSectionOpen ? "opacity-100" : "opacity-0 hidden"
          } `}
        >
          <div className="flex border-b-2 border-primary justify-center items-center text-center text-xl font-bold">
            Account
          </div>
          <div className="flex-1 text-wrap text-center mb-4">
            Login or signup to Purchase our Products.
          </div>
          <div className="flex gap-2  p-1">
            <Link
              to={"/auth"}
              className="w-full text-center text-white p-1 bg-main h-8 rounded-full "
            >
              Login
            </Link>

            <Link
              to={"/auth"}
              className="w-full text-center text-white p-1 bg-main h-8 rounded-full "
            >
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
