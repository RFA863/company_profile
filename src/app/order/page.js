"use client";

import { useState } from "react";

import Header from "@/components/order/Header";
import Sidebar from "@/components/order/Sidebar";
import Content from "@/components/order/Content";
import Status from "@/components/order/Status";

import FourFlap from "../../../public/image/4flap.jpg";
import BFlute from "../../../public/image/B-Flute.png";

export default function Order() {
  const [menu, setMenu] = useState("MODEL");
  const [model, setModel] = useState({
    image: FourFlap,
    value: "1",
    type: "4 Flap",
  });
  const [dimension, setDimension] = useState({
    panjang: "",
    lebar: "",
    tinggi: "",
  });
  const [material, setMaterial] = useState({
    image: BFlute,
    value: "1",
    type: "B-Flute",
  });

  return (
    <main>
      <Header />
      <div className="flex justify-center gap-10 py-12 px-12">
        <div className="flex gap-10 max-w-[1450px]">
          <Sidebar menu={menu} setMenu={setMenu} />
          <Content
            menu={menu}
            setMenu={setMenu}
            model={model}
            setModel={setModel}
            dimension={dimension}
            setDimension={setDimension}
            material={material}
            setMaterial={setMaterial}
          />
          <Status model={model} dimension={dimension} material={material} />
        </div>
      </div>
    </main>
  );
}
