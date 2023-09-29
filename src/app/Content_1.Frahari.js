// "use client";

import Image from "next/image";
import Background_1 from "../../public/image/background_1.png";

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   element.scrollIntoView({ behavior: "smooth" });
// };

export default function Content() {
  return (
    <div className="text-white relative" id="content1">
      <div>
        <div className="ml-6 absolute z-[1]">
          <p className="text-xl sm:text-8xl sm:mt-32 mt-16 sm:mb-16 mb-18">
            YOUR{" "}
            <span className="text-[#EE8300]">
              GREAT PRODUCT <br />
            </span>{" "}
            DESERVED <span className="text-[#EE8300]">GOOD PACKAGING.</span>
          </p>

          {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium purus placerat ipsum viverra volutpat. Sed tortor leo, laoreet quis tincidunt nec, consequat a augue. Nam quis tellus eu est aliquam varius non sed leo. Aliquam erat volutpat. Donec sit amet pulvinar orci. Donec tincidunt purus sed tincidunt tempus. Aenean a urna quis ligula tempus vehicula. Nullam commodo turpis quis lobortis tristique. Curabitur quis volutpat sapien, sit amet interdum est. </p> */}

          <button className="bg-[#EE8300] sm:p-2 p-1 sm:text-xl text:sm sm:mt-8 mt-4 rounded-lg">
            LEARN MORE ABOUT US
          </button>
        </div>
        <Image
          src={Background_1}
          className=" top-0 sh-full  sm:w-screen sm:h-screen sm:bg-cover"
        />
      </div>
    </div>
  );
}
