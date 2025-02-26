import React, { useEffect, useState, useRef } from "react";
import detimg1 from "/images/detimg1.jpg";
// import detimg2 from "/images/detimg2.jpg";
// import detimg3 from "/images/detimg3.jpg";

function DetailSections({ aboutref }) {
  const [visible1, setVisible1] = useState(false);
  // const [visible2, setVisible2] = useState(false);
  // const [visible3, setVisible3] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setScrollTop(true);
        setVisible1(false);
        // setVisible2(false);
        // setVisible3(false);
      } else {
        setScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!scrollTop) {
      const createObserver = (ref, setVisible) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
            }
          },
          { threshold: 0.3 }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      };
      const cleanup1 = createObserver(ref1, setVisible1);
      // const cleanup2 = createObserver(ref2, setVisible2);
      // const cleanup3 = createObserver(ref3, setVisible3);

      return () => {
        cleanup1();
        // cleanup2();
        // cleanup3();
      };
    }
  }, [scrollTop]);

  return (
    <>
      <div
        ref={aboutref}
        className="w-auto  h-full flex flex-col  gap-20 m-3 lg:m-14 lg:px-28"
      >
        {/* row - 1 */}
        <div
          ref={ref1}
          className="bg-secondary/20 shadow-2xl backdrop-blur-md rounded-3xl backdrop-brightness-125 w-full h-full gap-5 md:gap-14 p-4 md:p-10 flex justify-center flex-col  lg:flex-row "
        >
          {/* image */}
          <div
            className={`flex  mx-h-full transform  backdrop-blur-sm transition-all duration-[2000ms] ease-in-out  flex-1 ${
              visible1
                ? "md:opacity-100 md:translate-x-0"
                : "md:opacity-0 md:-translate-x-24"
            }`}
          >
            <img
              src={detimg1}
              alt=""
              className=" w-full object-cover rounded-lg"
            />
          </div>
          {/* text */}
          <div
            className={`transform  transition-all duration-[2000ms] text-center  ease-in-out w-full flex flex-1  flex-col gap-4 h-auto text-wrap ${
              visible1
                ? " opacity-100 translate-x-0"
                : " opacity-0 translate-x-24"
            }`}
          >
            <div className="text-main font-bold text-2xl  ">Welcome to</div>
            <div className="text-main text-4xl  md:text-5xl font-extrabold">
              Design Solution Store
            </div>
            <div className=" font-bold text-lg">
              Setting the Standard for Exceptional Glass Craftsmanship
            </div>

            <div className="flex  flex-col gap-4  ">
              <p className="  text-justify [text-align-last:center] ">
                {" "}
                At DSS, we stand at the forefront of innovation and precision in
                the realm of decorative glass design, LED mirror work, glass
                partitions, glass railings, UPVC windows fabrication, and a
                complete spectrum of specialized glass services. With an
                unwavering commitment to excellence, we have earned our
                reputation as quality manufacturers, dedicated to delivering
                unparalleled craftsmanship and tailored solutions to our
                esteemed clients.
              </p>
              <p className="  text-justify [text-align-last:center] ">
                {" "}
                Our legacy of expertise established with a vision to redefine
                architectural elegance, DSS brings decades of collective
                experience to the art and science of glasswork. Our seasoned
                team of artisans and technicians are masters in their respective
                fields, ensuring each project is executed with meticulous
                attention to detail, expertise, and professionalism. Our
                portfolio proudly showcases an array of successful ventures,
                ranging from residential marvels to commercial landmarks.
              </p>

              <p className="  text-justify [text-align-last:center] ">
                {" "}
                At DSS, we do not merely craft glass creations; we curate
                experiences. By choosing us, you invest in a partnership that
                values innovation, craftsmanship, and client satisfaction above
                all else. We invite you to explore the possibilities, witness
                the finesse, and let’s together create spaces that inspire and
                endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSections;
