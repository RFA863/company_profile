import Image from "next/image";

import HiringBg from "../../../public/image/HiringBg.png";
import HiringLogo from "../../../public/image/HiringLogo.png";

export default function Hiring() {
  return (
    <div className="relative">
      <div className="absolute z-[1] sm:top-20 top-12 text-white ">
        <div className="flex justify-center">
          <Image src={HiringLogo} alt="Logo" />
        </div>
        <div className="text-center mt-28 mb-8 font-black text-4xl tracking-wide">
          WE ARE <span className="text-[#FF6600]">HIRING</span>
        </div>
        <div className="text-center font-normal text-xl mx-8">
          Are you ready to be a part of innovation, craftsmanship, and
          excellence? At Box Industries, we are more than just a company – we
          are a family of dedicated individuals who take pride in crafting
          high-quality packaging solutions that drive industries forward.
        </div>
      </div>
      <Image src={HiringBg} alt="Background" className="h-screen  w-full " />
    </div>
  );
}
