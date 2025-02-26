import React, { useEffect, useRef } from "react";
import ProductsNavbar from "../components/productspage/ProductsNavbar";
import ContactUs from "../components/homepage/ContactUs";
import ProductsBody from "../components/productspage/ProductsBody";

const ProductsPage = () => {
  const contactUsRef = useRef(null);

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      const offset = 85;
      const elementPosition =
        contactUsRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });   
    }
  };

  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden ">
      <ProductsNavbar onContactUsClick={scrollToContactUs} />
      <ProductsBody />
      <ContactUs aboutcontactus={contactUsRef} />
    </div>
  );
};

export default ProductsPage;
