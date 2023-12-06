"use client";

import Image from "next/image";
import Background_1 from "../../public/image/background_1.png";
import { Parallax } from "react-scroll-parallax";

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   element.scrollIntoView({ behavior: "smooth" });
// };

export default function Content() {
  return (
    <div className="text-white relative select-none" id="content1">
      <Parallax translateY={[-50, 50]}>
        <div
          className="mx-6 absolute z-[1]"
          data-aos="fade-in-right"
          data-aos-duration="2500"
        >
          <div className="text-3xl sm:text-9xl sm:mt-32 mt-28 sm:mb-16 mb-10">
            YOUR {""}
            <span className="text-[#EE8300]">
              GREAT PRODUCT <br />
            </span>
            DESERVED <span className="text-[#EE8300]">BETTER PACKAGING.</span>
          </div>

          <p className=" text-justify text-xl sm:text-2xl">
            Cahaya Terang Box is your reliable partner for high-quality
            cardboard printing. We deliver the best quality in every cardboard
            product we produce. High-quality materials and advanced production
            processes ensure customer satisfaction. Our success is measure
            through customer satisfaction. We are committed to providing the
            best service and meeting the expectation of every customer. With
            modern and flexible production facilites, we can handle orders of
            various volumes. From small to large, we are ready to serve your
            needs.
          </p>

          {/* <button className="bg-[#EE8300] sm:px-4  px-4 py-2 sm:text-2xl text:sm sm:mt-8 mt-16 rounded-lg">
            LEARN MORE ABOUT US
          </button> */}
        </div>
        <Image
          src={Background_1}
          className=" object-cover h-screen sm:w-screen sm:h-screen sm:bg-cover"
          alt="bg-content1"
        />
      </Parallax>
    </div>
  );
}
