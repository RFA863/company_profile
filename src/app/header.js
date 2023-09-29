import Image from "next/image";
import Link from "next/link";

import logo_kiri from "../../public/image/logo_kiri.png";

export default function Header() {
  return (
    <div className="w-screen backdrop-blur-sm px-6  top-0 fixed z-[2]">
      <nav className="flex justify-between items-center mt-4">
        <Link href="/#">
          <Image src={logo_kiri} className=" sm:w-auto sm:h-12 h-6 w-auto " />
        </Link>
        <ul className="flex gap-1 sm:gap-8 text-white sm:text-2xl text-sm ">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#">ABOUT</Link>
          </li>
          <li>
            <Link href="#">SERVICE</Link>
          </li>
          <li>
            <Link href="#">PRODUCTS</Link>
          </li>
          <li>
            <Link href="#">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
