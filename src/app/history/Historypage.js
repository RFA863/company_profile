import Image from "next/image";
import Background_2 from "../../../public/image/background_2.png";
import { Parallax } from "react-scroll-parallax";

export default function Historypage() {
  return (
    <div className="text-white relative select-none" id="content2">
      <Parallax translateY={[-50, 50]}>
        <div>
          <div className="mx-6 absolute z-[1]" data-aos="zoom-in-right">
            <p className="text-[#EE8300] text-4xl sm:text-9xl sm:mt-32 mt-20 sm:mb-8 mb-8">
              VISION & MISSION
              {/* <span className="text-[#EE8300]">
                <br />
              </span>
              <span className="text-[#EE8300]">MISI</span> */}
            </p>
            <span className="text-justify text-xl sm:text-4xl">Vision:</span>
            <br></br>
            <span className="text-justify text-xl sm:text-4xl">
              To become the forefront of printing innovation, empowering
              businesses with unparalleled printing solutions that inspire
              excellence and drive success.
            </span>
            <br></br>
            <br></br>
            <span className="text-justify text-xl sm:text-4xl">Mission: </span>
            <td className="text-justify text-xl sm:text-3xl">
              <tr>
                <span className="text-[#EE8300]">
                  Excellence in Craftsmanship:{" "}
                </span>
                We strive to deliver superior quality in every print, leveraging
                advanced technology and expertise to exceed industry standards.
              </tr>
              <tr>
                <span className="text-[#EE8300]">
                  Client-Centric Approach:{" "}
                </span>
                Our commitment lies in understanding and fulfilling our clients'
                unique printing needs, offering tailored solutions that foster
                long-term partnerships.
              </tr>
              <tr>
                <span className="text-[#EE8300]">
                  Innovation and Adaptability:{" "}
                </span>
                We embrace innovation and continuously explore cutting-edge
                printing technologies, ensuring our services remain at the
                forefront of industry advancements.
              </tr>
            </td>
          </div>
          <Image
            src={Background_2}
            className=" object-cover h-screen  sm:w-screen sm:h-screen sm:bg-cover"
            alt="bg-content2"
          />
        </div>
      </Parallax>
    </div>
  );
}
