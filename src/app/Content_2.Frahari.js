"use client";

import Link from "next/link";
import Image from "next/image";
import Background_2 from "../../public/image/background_2.png";
import { useTypewriter } from "react-simple-typewriter";

export default function Content_2Frahari() {
  // const [text] = useTypewriter({
  //   words: [
  //     "With over 10 years of experience, we have dedicated ourselves to providing the best packaging and meet our customer expectations.",
  //   ],
  //   typeSpeed: 30,
  // });

  return (
    <div className="text-white relative select-none" id="content2">
      <div>
        <div className="mx-6 absolute z-[1]" data-aos="zoom-in-right">
          <p className="text-4xl sm:text-9xl sm:mt-36 mt-24 sm:mb-16 mb-16">
            BEEN IN THE INDUSTRY
            <span className="text-[#EE8300]">
              <br />
            </span>
            <span className="text-[#EE8300]">FOR YEARS.</span>
          </p>
          <span className="text-justify text-xl sm:text-4xl">
            With over 10 years of experience, we have dedicated ourselves to
            providing the best packaging and meet our customer expectations.
          </span>
          <div>
            <Link href="/history">
              <button className="text-center text-xl sm:text-4xl text-[#EEEEEE] bg-[#EE8300] rounded sm:rounded-lg p-1 sm:p-3 w-24 sm:w-40 hover:bg-[#D57200] mt-2">
                HISTORY
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={Background_2}
          className=" object-cover h-screen  sm:w-screen sm:h-screen sm:bg-cover brightness-75"
          alt="bg-content2"
        />
      </div>
    </div>
  );
}
