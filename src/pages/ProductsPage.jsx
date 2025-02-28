import React, { useEffect, useRef, useState } from "react";
import ProductsNavbar from "../components/productspage/ProductsNavbar";
import ContactUs from "../components/homepage/ContactUs";
import ProductsBody from "../components/productspage/ProductsBody";
import AddToCartModal from "../components/utils/AddToCartModal";


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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const item = { name: "Awesome Product" };

  const addToCartLogic = () => {
    // Add logic to update the cart state/context
   
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 10000); // Auto close after 10s
  };
  return (
    <div className=" relativeflex flex-col h-full overflow-hidden ">
      <ProductsNavbar onContactUsClick={scrollToContactUs} />
      <ProductsBody addToCart={addToCartLogic} />
      <ContactUs aboutcontactus={contactUsRef} />

      <div className="flex justify-center items-center">
        <AddToCartModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={item}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
