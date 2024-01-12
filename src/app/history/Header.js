"use client";

import Link from "next/link";
import Image from "next/image";
import logo_kiri from "../../../public/image/logo_kiri.png";

export default function Header() {
  return (
    <div className="w-screen px-6 pb-2 fixed z-[2]">
      <nav className="flex justify-between items-center mt-4">
        <Link href={"/"}>
          <Image
            src={logo_kiri}
            alt="Logo"
            className=" sm:w-auto sm:h-12 h-6 w-auto cursor-pointer"
          />
        </Link>
      </nav>
    </div>
  );
}
