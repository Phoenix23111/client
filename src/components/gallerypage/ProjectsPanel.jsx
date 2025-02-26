import React, { useCallback, useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import ImageSelector from "./ImageSelector";

const ProjectsPanel = ({ galleryData }) => {
  const data = galleryData;
  const [imageIds, setImageIds] = useState(0);
  const handleImageSelect = (sectionId, imageId) => {
    setImageIds((prev) => ({
      ...prev,
      [sectionId]: imageId, // Update imageId only for the specific section
    }));
  };

  return (
    <div className="mt-16 bg-white p-2 h-full md:p-8 flex flex-col flex-wrap gap-14 md:px-10">
      {data.map((section, index) => (
        <div
          key={section.id}
          className=" flex flex-col md:flex md:flex-row bg-secondary shadow-2xl backdrop-blur-sm  backdrop-brightness-125 p-2 md:p-8 rounded-lg  gap-8 h-full md:h-[90vh]"
        >
          {/* Image Mapping */}
          <div className="flex flex-col flex-1">
            <ImageSlider
              key={section.id}
              section={section}
              imageId={imageIds[section.id] || 0}
            />
            <ImageSelector
              section={section}
              setImageId={(imageId) => handleImageSelect(section.id, imageId)}
            />
          </div>

          {/* Heading & Detail */}
          <div className="flex flex-col flex-1">
            <h2 className="text-4xl font-bold text-main">{section.heading}</h2>
            <div className="p-4">
              {section.detail.split("\n").map((line, index) => (
                <p key={index} className="text-base/8">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPanel;
