import React, { useCallback, useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const ProjectsPanel = ({ galleryData }) => {
  const data = galleryData;

  return (
    <div className="mt-20 border-4 border-black p-5 flex flex-col gap-8">
      {data.map((section) => (
        <div key={section.id} className="border p-4 rounded-lg shadow-lg">
          {/* Image Mapping */}
          <ImageSlider key={section.id} section={section} />
          {/* Heading & Detail */}
          <h2 className="text-2xl font-bold">{section.heading}</h2>
          <p className="text-gray-600">{section.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPanel;
