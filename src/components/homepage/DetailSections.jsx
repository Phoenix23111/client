import React, { useEffect, useState, useRef } from "react";
import detimg1 from "/images/detimg1.jpg";
import detimg2 from "/images/detimg2.jpg";
import detimg3 from "/images/detimg3.jpg";

function DetailSections({ aboutref }) {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
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
        setVisible2(false);
        setVisible3(false);
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
      const cleanup2 = createObserver(ref2, setVisible2);
      const cleanup3 = createObserver(ref3, setVisible3);

      return () => {
        cleanup1();
        cleanup2();
        cleanup3();
      };
    }
  }, [scrollTop]);

  return (
    <>
      <div
        ref={aboutref}
        className="w-auto h-full flex flex-col gap-20 m-14 px-28"
      >
        {/* row - 1 */}
        <div
          ref={ref1}
          className="bg-secondary/20 shadow-2xl backdrop-blur-md rounded-3xl backdrop-brightness-125 w-full h-full gap-14 px-10 py-10 flex justify-center  sm:flex-col  lg:flex-row "
        >
          <div
            className={`flex  mx-h-full transform  backdrop-blur-sm transition-all duration-[2000ms] ease-in-out  flex-1  ${
              visible1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <img
              src={detimg1}
              alt=""
              className=" w-full object-cover rounded-lg"
            />
          </div>
          <div
            className={`transform  transition-all duration-[2000ms] text-center  ease-in-out w-full flex flex-1  flex-col gap-4 h-auto text-wrap${
              visible1
                ? " opacity-100 translate-x-0"
                : " opacity-0 translate-x-24"
            }`}
          >
            <div className="text-white font-bold text-2xl  ">Welcome to</div>
            <div className="text-main  text-5xl font-extrabold">
              Design Solution Store
            </div>
            <div className=" font-bold text-lg">
              Setting the Standard for Exceptional Glass Craftsmanship
            </div>
            <div className="text-sm">
              At DSS, we stand at the forefront of innovation and precision in
              the realm of decorative glass design, LED mirror work, glass
              partitions, glass railings, UPVC windows fabrication, and a
              complete spectrum of specialized glass services. With an
              unwavering commitment to excellence, we have earned our reputation
              as quality manufacturers, dedicated to delivering unparalleled
              craftsmanship and tailored solutions to our esteemed clients.
              <br />
              <br /> Our legacy of expertise established with a vision to
              redefine architectural elegance, DSS brings decades of collective
              experience to the art and science of glasswork. Our seasoned team
              of artisans and technicians are masters in their respective
              fields, ensuring each project is executed with meticulous
              attention to detail, expertise, and professionalism. Our portfolio
              proudly showcases an array of successful ventures, ranging from
              residential marvels to commercial landmarks.
              <br />
              <br />
              At DSS, we do not merely craft glass creations; we curate
              experiences. By choosing us, you invest in a partnership that
              values innovation, craftsmanship, and client satisfaction above
              all else. We invite you to explore the possibilities, witness the
              finesse, and let’s together create spaces that inspire and endure.
            </div>
          </div>
        </div>
        {/* row - 2 */}
        {/* <div
          ref={ref2}
          className="bg-secondary/20 shadow-2xl backdrop-blur-md rounded-3xl backdrop-brightness-125 w-full gap-14 px-10 py-10 flex justify-center items-center sm:flex-col  lg:flex-row "
        >
          <div
            className={`transform transition-all duration-[2000ms] text-center ease-in-out w-full flex flex-1  flex-col gap-4 h-auto text-wrap${
              visible2
                ? " opacity-100 translate-x-0"
                : " opacity-0 -translate-x-24"
            }`}
          >
            <div className="flex text-4xl justify-center text-center font-extrabold">
              <p className="text-black pe-3">Our</p>
              <p className="text-main">Mission</p>
            </div>
            <div className="text-sm">
              At DSS, we are driven by a singular mission: to set unmatched
              standards of precision, quality, and innovation in the world of
              glass design and fabrication. <br /> <br />
              We pledge to deliver each project with meticulous precision and
              unparalleled expertise. Innovation is our driving force, by
              staying at the forefront of industry trends, we create
              distinctive, avant-garde glass solutions. <br /> <br />
              Our clients are not just customers; they are partners. We are
              dedicated to understanding their unique needs and aspirations. By
              listening attentively and collaborating closely, we translate
              their visions into bespoke glass creations, surpassing their
              expectations. <br /> <br />
              Craftsmanship is our hallmark. We take immense pride in our work,
              whether it's an intricate decorative glass piece, a functional
              glass partition, or a state-of-the-art LED mirror. Our commitment
              to excellence permeates every project we undertake. <br />
              <br />
              We not only create exceptional glass designs but also serve as
              educators and inspiration sources. Through sharing our knowledge,
              we empower our clients to make informed decisions, encouraging
              them to envision and realize spaces beyond their imagination.{" "}
              <br />
              <br />
              At DSS, our mission is not just a statement but a daily
              commitment. We invite you to experience the pinnacle of
              professionalism, precision, and creativity in every glass
              creation. Partner with us, and together, let’s redefine what’s
              possible in the world of glass design. <br />
              <br />
            </div>
            <div className=" font-bold italic text-md">
              Elevating Spaces, Exceeding Expectations – Your Vision, Our
              Mission at DSS
            </div>
          </div>
          <div
            className={`transform transition-all duration-[2000ms] ease-in-out w-auto flex-1 h-full ${
              visible2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
          >
            <img
              src={detimg2}
              alt=""
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div> */}
        {/* row - 3 */}
        {/* <div
          ref={ref3}
          className="bg-secondary/20 shadow-2xl  backdrop-blur-md rounded-3xl backdrop-brightness-125 w-full gap-14 px-10 py-10 flex justify-center items-center sm:flex-col  lg:flex-row "
        >
          <div
            className={`transform transition-all duration-[2000ms] ease-in-out  w-auto flex-1 h-auto ${
              visible3
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <img
              src={detimg3}
              alt=""
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div
            className={`transform transition-all text-center duration-[2000ms] ease-in-out w-full flex flex-1 flex-col gap-4 h-auto text-wrap${
              visible3
                ? " opacity-100 translate-x-0"
                : " opacity-0 translate-x-24"
            }`}
          >
            <div className="flex text-4xl font-extrabold justify-center ">
              <p className="text-black pe-3">Our</p>
              <p className="text-main">Vision</p>
            </div>
            <div className="text-sm">
              We envision reaching the zenith of craftsmanship, where every
              design we create becomes a masterpiece. Our vision is to set
              unparalleled standards, not just in the quality of our work but in
              the emotional connection each creation evokes. <br /> <br />
              We dream of pushing the boundaries of creativity and explore the
              uncharted territories of design, infusing every project with a
              touch of artistic brilliance that transcends the ordinary and
              ventures into the extraordinary. <br /> <br />
              Our vision includes fostering enduring relationships with our
              clients. We strive to be not just service providers but trusted
              partners. We aim to anticipate our clients’ needs, exceed their
              expectations, and leave them with an experience that resonates
              long after the project is complete
              <br /> <br />
              We aim to inspire budding artists and designers. Our vision
              includes nurturing talent, supporting creativity, and being a
              source of inspiration for the next generation of artisans and
              innovators. <br />
              <br />
              At DSS, it isn’t just a distant goal; it’s the driving force
              behind every project we undertake. Join us in this visionary
              pursuit. Experience the fusion of art, innovation, and
              professionalism that defines DSS. Together, let’s create a future
              where design knows no bounds and creativity knows no limits.
              <br />
              <br />
            </div>
            <div className=" font-bold italic text-md">
              Elevate Your Vision – Redefining Excellence with DSS
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default DetailSections;
