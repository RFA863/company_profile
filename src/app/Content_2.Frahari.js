"use client";

import Image from "next/image";
import Background_2 from "../../public/image/background_2.png";
import { useTypewriter } from "react-simple-typewriter";

export default function Content_2Frahari() {
  const [text] = useTypewriter({
    words: [
      "With over 10 years of experience, we have dedicated ourselves to providing the best packaging and meet our customer expectations.",
    ],
    typeSpeed: 30,
  });

  return (
    <div className="text-white relative" id="content2">
      <div>
        <div className="mx-6 absolute z-[1]" data-aos="zoom-in-right">
          <p className="text-4xl sm:text-9xl sm:mt-36 mt-24 sm:mb-16 mb-16">
            BEEN IN THE INDUSTRY
            <span className="text-[#EE8300]">
              <br />
            </span>
            <span className="text-[#EE8300]">FOR YEARS.</span>
          </p>
          <span className="text-justify text-xl sm:text-4xl">{text}</span>{" "}
          {/* <button className="bg-[#EE8300] sm:px-6  py-2 px-6 sm:text-4xl text:2xl  mt-16 rounded-lg">
            HISTORY
          </button> */}
        </div>
        <Image
          src={Background_2}
          className=" object-cover h-screen  sm:w-screen sm:h-screen sm:bg-cover"
        />
      </div>
    </div>
  );
}
