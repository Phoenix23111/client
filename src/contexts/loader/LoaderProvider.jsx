import { useState, useEffect } from "react";
import LoaderContext from "./LoaderContext";
const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const hideLoader = () => setLoading(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => hideLoader(), 1000); // Delay for 1 seconds
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
