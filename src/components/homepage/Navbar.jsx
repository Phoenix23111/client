import React, { useState, useEffect, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import logo from "/images/logo.png";
import logotxt from "/images/dss.png";
import { BiUserCircle, BiMenu } from "react-icons/bi";

import { Link } from "react-router-dom";

function Navbar({ onAboutUsClick, onContactUsClick }) {
  const [count, setCount] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const [accountSectionOpen, setAccountSectionOpen] = useState(false);

  const handleMenuModal = () => {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setAccountSectionOpen(false);
      }
    };

    if (accountSectionOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [accountSectionOpen]);

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
        className={`fixed top-0 z-50 h-16 text-main flex shadow-2xl w-full  transition-all   duration-700 ease-out ${
          scrolling && !isScrollingUp
            ? "opacity-0 -translate-y-20 "
            : "opacity-100 bg-secondary"
        }`}
      >
        <div className="w-full relative flex items-center justify-center gap-10 px-6 md:px-20 md:justify-between h-16">
          {/* Menu button */}
          <div className="w-auto h-auto lg:hidden" onClick={handleMenuModal}>
            <BiMenu className="size-8" />
          </div>
          {/* Logo */}
          <Link
            to={"/"}
            className="flex justify-center w-auto h-auto items-center gap-3 "
          >
            <img
              src={logo}
              alt=" logo"
              className="w-auto object-cover h-8 md:h-11 "
            />

            <img
              src={logotxt}
              alt=" logo"
              className="w-auto object-cover h-10 md:h-14"
            />
          </Link>
          {/* MENU options */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`transition-all duration-500  ${
              menuOpen
                ? "absolute h-screen w-full top-16 left-0 bg-blend-overlay bg-black/30 "
                : " hidden lg:flex lg:justify-center lg:items-center text-nowrap"
            } `}
          >
            <div
              className={` font-bold ${
                menuOpen
                  ? " w-full p-4 text-left items-start flex flex-col border-t-2 border-primary   divide-y-2  divide-primary space-y-4  bg-secondary  "
                  : "hidden lg:flex lg:justify-center lg:items-center gap-20 w-full  "
              } `}
            >
              {/* About us */}
              <div
                className="  lg:hover:cursor-pointer"
                onClick={() => {
                  onAboutUsClick();
                  setMenuOpen(false);
                }}
              >
                About Us
              </div>
              {/* Gallery */}
              <Link
                to={"/gallery"}
                className=" w-full  lg:hover:cursor-pointer"
              >
                Gallery
              </Link>
              {/* Products */}
              <Link
                to={"/products"}
                className=" w-full  lg:hover:cursor-pointer"
              >
                Products
              </Link>
              {/* Contactus */}
              <div
                className=" w-full  lg:hover:cursor-pointer"
                onClick={() => {
                  onContactUsClick();
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </div>
            </div>
          </div>

          <div className="relative flex gap-3 items-center">
            <div>
              <BiSearchAlt size={25} />
            </div>
            <div className="relative ">
              <Link to={"/products/cart"}>
                <div className="absolute -top-2 -right-2 bg-main  text-white rounded-full font-bold w-5 h-5 text-xs flex items-center justify-center">
                  {count}
                </div>
                <BsCart2 size={25} />
              </Link>
            </div>
            <div
              ref={buttonRef}
              onClick={() => {
                setAccountSectionOpen(!accountSectionOpen);
              }}
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
            ref={modalRef}
            aria-label="Account Modal"
            aria-modal="true"
            className={`absolute top-20 right-0 md:top-20 md:right-24 w-60 h-36  rounded-lg rounded-tr-none p-2 bg-secondary transition-all duration-500 ${
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
                state={{ authState: "login" }}
                className="w-full text-center text-white p-1 bg-main h-8 rounded-full "
              >
                Login
              </Link>

              <Link
                to={"/auth"}
                state={{ authState: "signup" }}
                className="w-full text-center text-white p-1 bg-main h-8 rounded-full "
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
