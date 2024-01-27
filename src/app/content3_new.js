"use client";

import Link from "next/link";
import Image from "next/image";
import Content3 from "../../public/image/Content3.png";

export default function Content3New() {
  return (
    <div className="relative h-screen w-screen select-none" id="content3">
      <div
        className="flex w-full h-full"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <div className="sm:w-[40vw] h-full"></div>
        <div className="px-4 sm:px-0 pt-20 sm:pt-0 flex-initial sm:w-[700px] flex flex-col sm:justify-center gap-4">
          <div className="flex flex-col text-4xl sm:text-9xl">
            <div className="text-[#EEEEEE]">MAKE TO ORDER</div>
            <div className="text-[#EE8300]">MADE IT EASY.</div>
          </div>
          <div className="flex flex-col gap-2 text-xl sm:text-3xl text-[#EEEEEE] sm:whitespace-normal text-justify">
            <h4>
              Feel free to reach out to our team for further discussions on how
              we can help meet your cardboard packaging needs.
            </h4>
            <h4>Click the button bellow to check estimated pricing!</h4>
          </div>
          {/* <Link href="/order">
            <button className="text-center text-xl sm:text-4xl text-[#EEEEEE] bg-[#EE8300] rounded sm:rounded-lg p-1 sm:p-4 w-24 sm:w-40 hover:bg-[#D57200] mt-2">
              ORDER NOW
            </button>
          </Link> */}
        </div>
      </div>
      <Image
        alt="bg-content3"
        src={Content3}
        className="absolute top-0 left-0 -z-[1] w-full h-full object-cover object-left brightness-90"
      />
    </div>
  );
}
