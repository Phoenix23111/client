import React from "react";
import { useLoader } from "../../contexts/loader/LoaderContext";

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-main ">
      <img
        src="/client/images/spinnerImg.gif"
        alt="Loading..."
        className="w-32 h-32 object-contain"
      />
    </div>
  );
};

export default Loader;
