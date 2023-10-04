"use client";

import Image from "next/image";
import logo_kiri from "../../public/image/logo_kiri.png";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <div className="w-screen backdrop-blur-sm px-6  top-0 fixed z-[2]">
      <nav className="flex justify-between items-center mt-4">
        <Image src={logo_kiri} className=" sm:w-auto sm:h-12 h-6 w-auto " />
        <ul className="flex gap-1 sm:gap-8 text-white sm:text-2xl text-sm ">
          <button onClick={() => scrollToSection("content1")}>HOME</button>
          <button onClick={() => scrollToSection("content2")}>ABOUT</button>
          <button onClick={() => scrollToSection("content3")}>SERVICE</button>
          <button onClick={() => scrollToSection("content4")}>PRODUCTS</button>
          <button onClick={() => scrollToSection("footer")}>CONTACT</button>
        </ul>
      </nav>
    </div>
  );
}
