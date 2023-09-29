"use client";

import Image from "next/image";
import Link from "next/link";

import logo_kiri from "../../public/image/logo_kiri.png";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
// <<<<<<< staging
    <div className="w-screen">
      <div className="px-6  top-0 fixed z-[2] w-full">
        <nav className="flex justify-between items-center mt-4">
          <Image src={logo_kiri} className=" sm:w-auto sm:h-12 h-6 w-auto " />
          <ul className="flex space-x-4 text-white sm:text-2xl text-sm ">
            <button onClick={() => scrollToSection("content1")}>HOME</button>
            <button onClick={() => scrollToSection("content2")}>ABOUT</button>
            <button onClick={() => scrollToSection("content3")}>SERVICE</button>
            <button onClick={() => scrollToSection("content4")}>
              PRODUCTS
            </button>
            <button onClick={() => scrollToSection("footer")}>CONTACT</button>
          </ul>
        </nav>
      </div>
// =======
//     <div className="w-screen backdrop-blur-sm px-6  top-0 fixed z-[2]">
//       <nav className="flex justify-between items-center mt-4">
//         <Link href="/#">
//           <Image src={logo_kiri} className=" sm:w-auto sm:h-12 h-6 w-auto " />
//         </Link>
//         <ul className="flex gap-1 sm:gap-8 text-white sm:text-2xl text-sm ">
//           <li>
//             <Link href="#">HOME</Link>
//           </li>
//           <li>
//             <Link href="#">ABOUT</Link>
//           </li>
//           <li>
//             <Link href="#">SERVICE</Link>
//           </li>
//           <li>
//             <Link href="#">PRODUCTS</Link>
//           </li>
//           <li>
//             <Link href="#">CONTACT</Link>
//           </li>
//         </ul>
//       </nav>
// >>>>>>> staging
    </div>
  );
}
