import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/homepage/Navbar.jsx";
import Carousel from "../components/homepage/Carousel.jsx";
import DetailSections from "../components/homepage/DetailSections.jsx";
import FeaturedProducts from "../components/homepage/FeaturedProducts.jsx";

import ContactUs from "../components/homepage/ContactUs.jsx";
import HeroSection from "../components/homepage/HeroSection.jsx";
import bg_img from "/images/bg-img.png";
import WhatsappButton from "../components/homepage/WhatsappButton.jsx";
import ArrowToTop from "../components/homepage/ArrowToTop.jsx";
import { useLocation } from "react-router-dom";

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
      <div
        className={` relative w-full flex bg-[url("/images/bg-img2.jpg")] bg-fixed  bg-cover flex-col h-auto `}
      >
        {/* Navbar */}
        <Navbar
          onAboutUsClick={scrollToAbout}
          onContactUsClick={scrollToContactUs}
        />
        {/* Hero Section */}
        <HeroSection />
        {/* Carousel */}
        {/* <Carousel /> */}
        {/* Details Section */}
        <DetailSections aboutref={aboutRef} />
        {/* Products Section */}
        <FeaturedProducts />
        {/* contact us section */}
        <ContactUs aboutcontactus={contactUsRef} />
        {/* Arrow to Top Button */}
        <ArrowToTop />
        {/* Whatsapp BUtton */}
        <WhatsappButton />
      </div>
    </>
  );
}

export default HomePage;
