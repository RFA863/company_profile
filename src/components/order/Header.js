"use client";

import Image from "next/image";
import logo_kiri from "../../../public/image/logo_kiri.png";

export default function Header() {
  return (
    <div className="w-screen">
      <div className="px-6 top-0 w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pb-4">
        <div className="flex justify-between items-center mt-4">
          <Image
            src={logo_kiri}
            className=" sm:w-auto sm:h-12 h-6 w-auto"
            alt="LOGO"
          />
        </div>
      </div>
    </div>
  );
}
