import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/homepage/Navbar";
import ProjectsPanel from "../components/gallerypage/ProjectsPanel";
import ContactUs from "../components/homepage/ContactUs";

const GalleryPage = () => {
  const data = [
    {
      id: 1,
      heading: "Heading 1",
      detail: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquid, sit voluptatem dolorem aspernatur deserunt vel consequatur, 
        beatae, placeat doloribus ipsum. 
        Minima quaerat eaque ullam voluptas qui! Iusto, ab eveniet.`,
      images: [
        { imageid: 1, src: "/client/images/authpagebg.png" },
        { imageid: 2, src: "/client/images/bg-img.png" },
        { imageid: 3, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 2,
      heading: "Heading 2",
      detail: `Lorem ipsum,
       dolor sit amet consectetur 
       adipisicing elit. Assumenda aliquid, sit voluptatem dolorem aspernatur deserunt vel consequatur, beatae, placeat doloribus ipsum. Minima quaerat eaque ullam voluptas qui! Iusto, ab eveniet.`,
      images: [
        { imageid: 1, src: "/client/images/authpagebg.png" },
        { imageid: 2, src: "/client/images/bg-img.png" },
        { imageid: 3, src: "/client/images/detimg1.jpg" },
        { imageid: 4, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 3,
      heading: "Heading 3",
      detail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquid, sit voluptatem dolorem aspernatur deserunt vel consequatur, beatae, placeat doloribus ipsum. Minima quaerat eaque ullam voluptas qui! Iusto, ab eveniet.",
      images: [
        { imageid: 1, src: "/client/images/authpagebg.png" },
        { imageid: 2, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 4,
      heading: "Heading 4",
      detail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquid, sit voluptatem dolorem aspernatur deserunt vel consequatur, beatae, placeat doloribus ipsum. Minima quaerat eaque ullam voluptas qui! Iusto, ab eveniet.",
      images: [
        { imageid: 1, src: "/client/images/authpagebg.png" },
        { imageid: 2, src: "/client/images/bg-img.png" },
        { imageid: 3, src: "/client/images/detimg1.jpg" },
      ],
    },
  ];
  const NavbarLinks = ["Gallery","Products","Contact Us"]

  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);
  const location = useLocation();
  const Navigate = useNavigate();
  

  const scrollToAbout = () => {
    if (location.pathname !== "/") {
      Navigate("/");

      if (aboutRef.current) {
        const offset = 90;
        const elementPosition =
          aboutRef.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  };

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

  return (
    <>
      <Navbar
        onAboutUsClick={scrollToAbout}
        onContactUsClick={scrollToContactUs}
        navbarlinks={NavbarLinks}
      />

      <ProjectsPanel galleryData={data} />
      <ContactUs aboutcontactus={contactUsRef} />
    </>
  );
};

export default GalleryPage;
