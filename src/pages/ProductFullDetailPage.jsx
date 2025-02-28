import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsNavbar from "../components/productspage/ProductsNavbar";
import ContactUs from "../components/homepage/ContactUs";
import ProductDetailSection from "../components/productfulldetailpage/ProductDetailSection";
import AddToCartModal from "../components/utils/AddToCartModal";

const ProductFullDetailPage = () => {
  const { category, id } = useParams();
  const prodId = id.split("product_id:");

  const productsCategoriesDataForCards = [
    {
      P_id: 0,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 1,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 2,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 3,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 4,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 5,
      name: "Product Name",
      description: "Product Description",
      price: { value: 128, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 6,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Decorative Glass",
      brand: "",
      Featured: true,
      images: [
        { I_id: 0, src: "/client/images/bg-img.png", main: true },
        { I_id: 1, src: "", main: false },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 7,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Building Glass",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 8,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Shower Cabins",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 9,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Railings",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 10,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Skylights",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 11,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Tempering",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 12,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 13,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "", main: "" },
        { I_id: 1, src: "", main: "" },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
    {
      P_id: 14,
      name: "Product Name",
      description: "Product Description",
      price: { value: 0, unit: "Rs" },
      category: "Glass Double Glazing",
      brand: "",
      Featured: false,
      images: [
        { I_id: 0, src: "/client/images/image1.jpg", main: true },
        { I_id: 1, src: "", main: false },
      ],
      stock: "",
      weight: "128",
      dimensions: { length: "", width: "", height: "" },
      tags: [],
      rating: 0,
    },
  ];
  const product = productsCategoriesDataForCards.find(
    (data) => data.P_id === Number(prodId[1]) && category
  );
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
    <>
      <ProductsNavbar onContactUsClick={scrollToContactUs} />
      <div className=" h-full mt-16 p-5 md:p-10">
        <ProductDetailSection
          product={product}
          addToCartLogic={addToCartLogic}
        />
      </div>
      <ContactUs aboutcontactus={contactUsRef} />
      <div className="flex justify-center items-center">
        <AddToCartModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={item}
        />
      </div>
    </>
  );
};

export default ProductFullDetailPage;
