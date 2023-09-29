"use client";

import SidebarMenu from "./SidebarMenu";

import Model from "../../../public/image/Model.png";
import Ukuran from "../../../public/image/Ukuran.png";
import Material from "../../../public/image/Material.png";

export default function Sidebar({ menu, setMenu }) {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col items-center gap-4 p-6 w-36 bg-[#D9D9D9]">
        <SidebarMenu
          image={Model}
          text={"MODEL"}
          isSelected={true}
          clickHandler={() => setMenu("MODEL")}
          selectedMenu={menu}
        />
        <SidebarMenu
          image={Ukuran}
          text={"UKURAN"}
          clickHandler={() => setMenu("UKURAN")}
          selectedMenu={menu}
        />
        <SidebarMenu
          image={Material}
          text={"MATERIAL"}
          clickHandler={() => setMenu("MATERIAL")}
          selectedMenu={menu}
        />
      </div>
    </div>
  );
}
