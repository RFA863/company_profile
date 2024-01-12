"use client";

import Image from "next/image";
import logo_kiri from "../../public/image/logo_kiri.png";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <div className="w-screen backdrop-blur-sm px-6 pb-2 fixed z-[2]">
      <nav className="flex justify-between items-center mt-4">
        <Image
          src={logo_kiri}
          alt="Logo"
          onClick={() => scrollToSection("content1")}
          className=" sm:w-auto sm:h-12 h-6 w-auto cursor-pointer"
        />
        <ul className="flex gap-1 sm:gap-8 text-white sm:text-2xl text-sm  ">
          <button
            onClick={() => scrollToSection("content1")}
            className="hover:opacity-50"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("content2")}
            className="hover:opacity-50"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("content3")}
            className="hover:opacity-50"
          >
            SERVICE
          </button>
          <button
            onClick={() => scrollToSection("content4")}
            className="hover:opacity-50"
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="hover:opacity-50"
          >
            CONTACT
          </button>
        </ul>
      </nav>
    </div>
  );
}
