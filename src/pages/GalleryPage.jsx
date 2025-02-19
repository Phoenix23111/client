import React from "react";
import Navbar from "../components/homepage/Navbar";
import ProjectsPanel from "../components/gallerypage/ProjectsPanel";

const GalleryPage = () => {
  const data = [
    {
      id: 1,
      heading: "Hello",
      detail: "Worlds",
      images: [
        { id: 1, src: "/client/images/authpagebg.png" },
        { id: 2, src: "/client/images/bg-img.png" },
        { id: 3, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 2,
      heading: "Heaallsssssssssss",
      detail: "Worlds",
      images: [
        { id: 1, src: "/client/images/authpagebg.png" },
        { id: 2, src: "/client/images/bg-img.png" },
        { id: 3, src: "/client/images/detimg1.jpg" },
        { id: 4, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 1,
      heading: "Hello",
      detail: "Worlds",
      images: [
        { id: 1, src: "/client/images/authpagebg.png" },
        { id: 2, src: "/client/images/detimg1.jpg" },
      ],
    },
    {
      id: 2,
      heading: "Heaallsssssssssss",
      detail: "Worlds",
      images: [
        { id: 1, src: "/client/images/authpagebg.png" },
        { id: 2, src: "/client/images/bg-img.png" },
        { id: 3, src: "/client/images/detimg1.jpg" },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <ProjectsPanel galleryData={data} />
    </>
  );
};

export default GalleryPage;
