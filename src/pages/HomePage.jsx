import React, { useRef } from "react";
import Navbar from "../components/homepage/Navbar.jsx";
import Carousel from "../components/homepage/Carousel.jsx";
import DetailSections from "../components/homepage/DetailSections.jsx";
import FeaturedProducts from "../components/homepage/FeaturedProducts.jsx";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import ContactUs from "../components/homepage/ContactUs.jsx";

function HomePage() {
  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className=" w-full flex bg-[url('/images/gbghm.jpg')]  bg-fixed bg-left-top gap-10 flex-col h-auto ">
        <Navbar
          onAboutUsClick={scrollToAbout}
          onContactUsClick={scrollToContactUs}
        />
        <Carousel />
        <DetailSections aboutref={aboutRef} />
        <FeaturedProducts />
        <ContactUs aboutcontactus={contactUsRef} />

        <div
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=+923215888832&text=Hello%2C%20I%20am%20interested%20in%20your%20products.",
              "_blank"
            );
          }}
          className=" hover:cursor-pointer hover:bg-green-400 flex justify-center w-12 h-12 rounded-full bg-green-600 transition-all duration-700 m-5 fixed text-white bottom-20 right-0 items-center"
        >
          <BsWhatsapp className="text-3xl font-bold" />
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className=" hover:cursor-pointer hover:bg-green-400 transition-all duration-700 flex justify-center w-12 h-12 rounded-full bg-green-500 m-5 fixed text-white  bottom-0 right-0 items-center"
        >
          <BiSolidArrowToTop className="text-3xl font-bold" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
