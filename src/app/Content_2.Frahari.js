import React from "react";
import Image from "next/image";
import Background_2 from "../../public/image/background_2.png";

export default function Content_2Frahari() {
  return (
    <div className="text-white relative" id="content2">
      <div>

        <div className="mx-6 absolute z-[1]">
          <p className="text-4xl sm:text-9xl sm:mt-36 mt-24 sm:mb-16 mb-16">
            BEEN IN THE INDUSTRY
            <span className="text-[#EE8300]">

              <br />
            </span>
            <span className="text-[#EE8300]">FOR YEARS.</span>
          </p>


          <p className=" text-justify sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pretium purus placerat ipsum viverra volutpat. Sed tortor leo,
            laoreet quis tincidunt nec, consequat a augue. Nam quis tellus eu
            est aliquam varius non sed leo. Aliquam erat volutpat. Donec sit
            amet pulvinar orci. Donec tincidunt purus sed tincidunt tempus.
            Aenean a urna quis ligula tempus vehicula. Nullam commodo turpis
            quis lobortis tristique. Curabitur quis volutpat sapien, sit amet
            interdum est.
          </p>

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
