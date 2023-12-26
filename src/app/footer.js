"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/Logo.png";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill, BsBuildingsFill } from "react-icons/bs";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="footer" data-aos="flip-up" data-aos-duration="500">
      <div
        className={"sm:flex justify-evenly text-[#4D4D4D] font-medium mt-10"}
      >
        <div className="flex items-center">
          <Image
            src={Logo}
            className="pl-10 sm:pl-0 w-[245px] sm:w-[345px]"
            alt="logo"
          />
        </div>
        <div className="flex flex:row sm:flex-col justify-center sm:justify-normal gap-10 sm:gap-0 leading-7 sm:leading-10 font-medium text-base sm:text-3xl items-center">
          <button
            onClick={() => scrollToSection("content1")}
            className="text-justify hover:opacity-50"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("content2")}
            className="text-justify hover:opacity-50"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("content3")}
            className="text-justify hover:opacity-50"
          >
            SERVICE
          </button>
          <button
            onClick={() => scrollToSection("content4")}
            className="text-justify hover:opacity-50"
          >
            PRODUCT
          </button>
          <Link href="/upload_cv">
            <button className="text-justify hover:opacity-50">HIRING</button>
          </Link>
        </div>
        <div className="leading-7 sm:leading-10">
          <div className="flex justify-center sm:justify-normal text-base sm:text-3xl pt-5 sm:pt-0">
            ABOUT US
          </div>
          <div className="pl-20 sm:pl-0">
            <div className="flex items-center gap-2 my-2">
              <div>
                <IoIosMail className={"text-base sm:text-2xl text-[#EE8300]"} />
              </div>
              <div
                className="text-sm sm:text-xl cursor-pointer"
                onClick={() =>
                  window.open("mailto:cahayaterangbox_57@yahoo.com")
                }
              >
                CAHAYATERANGBOX_57@YAHOO.COM
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div>
                <BsTelephoneFill
                  className={"text-sm sm:text-xl text-[#EE8300]"}
                />
              </div>
              <div>
                <div className="text-sm sm:text-xl">[022]52445057</div>
                <div className="text-sm sm:text-xl">[022]52445058</div>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div>
                <BsBuildingsFill
                  className={"text-sm sm:text-xl text-[#EE8300]"}
                />
              </div>
              <div
                className="text-sm sm:text-xl cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir//cahaya+terang+bix/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e68ef6731997997:0xb9da344b1c26b338?sa=X&ved=2ahUKEwi7zKXqhuGBAxXW6KACHb2gAuQQ9Rd6BAhJEAA&ved=2ahUKEwi7zKXqhuGBAxXW6KACHb2gAuQQ9Rd6BAhZEAQ"
                  )
                }
              >
                JL. CIBOLERANG NO.203 KAV 20A BABAKAN CIPARAY,
                <br />
                BANDUNG WEST JAVA-INDONESIA 40174
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 px-10 py-6 border-t-2 border-[#4D4D4D]">
        <div className="text-xs sm:text-base selec-none">
          © 2023, All Rights Reserved
        </div>
      </div>
    </div>
  );
}
