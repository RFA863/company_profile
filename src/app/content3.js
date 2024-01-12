"use client";

import Link from "next/link";
import Image from "next/image";
import Content3 from "../../public/image/Content3.png";

// import Dummy from "../../public/image/dummy.png";

export default function Content() {
  return (
    <div className="relative" id="content3">
      <div>
        <div
          className="flex absolute z-[1] mt-14 sm:mt-28 mx-6 sm:mx-0"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="sm:basis-1/2 basis-0"></div>
          <div className="flex flex-col sm:basis-1/2 gap-0.5 sm:gap-4">
            <div className="text-4xl sm:text-9xl text-[#EEEEEE]">
              MAKE TO ORDER
            </div>
            <div className="text-4xl sm:text-9xl sm:mb-0 mb-16 text-[#EE8300]">
              MADE IT EASY.
            </div>
            <div className="text-sm sm:text-3xl text-[#EEEEEE] sm:whitespace-normal  text-justify mr-4">
              Feel free to reach out to our team for further discussions on how
              we can help meet your cardboard packaging needs.
            </div>
            <div className="text-sm sm:text-3xl text-[#EEEEEE] sm:whitespace-normal  text-justify mr-4">
              Click the button bellow to check estimated pricing!
            </div>
            <Link href="/order">
              <button className="text-center text-xl sm:text-4xl text-[#EEEEEE] bg-[#EE8300] rounded sm:rounded-lg p-1 sm:p-4  w-24 sm:w-40 hover:bg-[#D57200] mt-2">
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={Content3}
          className=" object-cover object-left h-screen sm:w-screen sm:h-screen sm:bg-cover"
        />
      </div>
    </div>
  );
}
