"use client";

import Image from "next/image";
import Content3 from "../../public/image/Content3.png";
import { useRouter } from "next/navigation";
// import Dummy from "../../public/image/dummy.png";

export default function Content() {
  const router = useRouter();

  return (
// <<<<<<< staging
    <div className="relative" id="content3">
      <div>
        <div className="flex absolute z-[1] mt-12 sm:mt-44">
          <div className="pl-10 sm:pl-0 w-80 sm:w-[1000px]"></div>
          <div className="flex flex-col gap-0.5 sm:gap-6">
            <div className="text-xl sm:text-9xl text-[#EEEEEE]">
              MAKE TO ORDER
            </div>
            <div className="text-xl sm:text-9xl text-[#EE8300]">
              MADE IT EASY.
            </div>
            <div className="text-sm sm:text-4xl text-[#EEEEEE] sm:whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pretium purus placerat ipsum viverra volutpat.
            </div>
            <button
              className="text-center text-sm sm:text-4xl text-[#EEEEEE] bg-[#EE8300] rounded sm:rounded-lg p-1 sm:p-4 w-16 sm:w-40"
              onClick={() => router.push("/order")}
            >
              ORDER NOW
            </button>
// =======
//     <div className="relative">
//       <div className="flex absolute z-[1] mt-24 sm:mt-44">
//         <div className="basis-1/3"></div>
//         <div className="flex flex-col basis-2/3 gap-0.5 sm:gap-6">
//           <div className="text-4xl sm:text-9xl text-[#EEEEEE]">
//             MAKE TO ORDER
// >>>>>>> staging
//           </div>
          <div className="text-4xl sm:text-9xl sm:mb-0 mb-16 text-[#EE8300]">
            MADE IT EASY.
          </div>
          <div className="text-sm sm:text-4xl text-[#EEEEEE] sm:whitespace-normal  text-justify mr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pretium purus placerat ipsum viverra volutpat.
          </div>
          <button
            className="text-center text-xl sm:text-4xl text-[#EEEEEE] bg-[#EE8300] rounded sm:rounded-lg p-1 sm:p-4  w-24 sm:w-40"
            onClick={() => scrollToSection("footer")}
          >
            ORDER NOW
          </button>
        </div>
      </div>
      <Image
        src={Content3}
        className=" object-cover object-left h-screen sm:w-screen sm:h-screen sm:bg-cover"
      />
    </div>
  );
}
