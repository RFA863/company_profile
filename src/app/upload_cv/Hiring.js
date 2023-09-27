import Image from "next/image";

import HiringBg from "../../../public/image/HiringBg.png";
import HiringLogo from "../../../public/image/HiringLogo.png";

export default function Hiring() {
  return (
    <div>
      <Image src={HiringBg} className="h-screen  w-full " />

      <div className="absolute z-[1] top-20 text-white ">
        <div className="flex justify-center">
          <Image src={HiringLogo} />
        </div>
        <div className="text-center mt-32 mb-8 font-black text-4xl tracking-wide">
          WE ARE <span className="text-[#FF6600]">HIRING</span>
        </div>
        <div className="text-center font-normal text-xl">
          Are you ready to be a part of innovation, craftsmanship, and
          excellence? At Box Industries, we are more than just a company – we
          are a family of dedicated individuals who take pride in crafting
          high-quality packaging solutions that drive industries forward.
        </div>
      </div>
    </div>
  );
}
