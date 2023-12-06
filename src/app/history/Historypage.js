import Image from "next/image";
import Background_2 from "../../../public/image/background_2.png";

export default function Historypage() {
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
        </div>
        <Image
          src={Background_2}
          className=" object-cover h-screen  sm:w-screen sm:h-screen sm:bg-cover"
          alt="bg-content2"
        />
      </div>
    </div>
  );
}
