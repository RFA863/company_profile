import Image from "next/image";
import Logo from "../../../public/image/LogoGede.png";

export default function Historybranch() {
  return (
    <div>
      <div className="flex justify-center">
        <div>tes</div>
        <div>tes2</div>
      </div>
      <div className="flex justify-center bg-[#2B2B2B]">
        <div>tes</div>
        <Image
          src={Logo}
          className="object-cover max-w-[862px] bg-cover"
          alt="logo"
        />
      </div>
    </div>
  );
}
