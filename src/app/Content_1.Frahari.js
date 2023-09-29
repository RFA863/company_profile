// "use client";

import Image from "next/image";
import Background_1 from "../../public/image/background_1.png";

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   element.scrollIntoView({ behavior: "smooth" });
// };

export default function Content() {
  return (
    <div className="text-white relative">
      <div>
        <div className="mx-6 absolute z-[1] ">
          <div className="text-3xl sm:text-9xl sm:mt-32 mt-28 sm:mb-16 mb-10">
            YOUR {""}
            <span className="text-[#EE8300]">
              GREAT PRODUCT <br />
            </span>
            DESERVED <span className="text-[#EE8300]">GOOD PACKAGING.</span>
          </div>

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

          {/* <button className="bg-[#EE8300] sm:px-4  px-4 py-2 sm:text-2xl text:sm sm:mt-8 mt-16 rounded-lg">
            LEARN MORE ABOUT US
          </button> */}
        </div>
        <Image
          src={Background_1}
          className=" object-cover h-screen   sm:w-screen sm:h-screen sm:bg-cover"
        />
      </div>
    </div>
  );
}
