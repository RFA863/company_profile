import Image from "next/image";
import Logo from "../../../public/image/LogoGede.png";

import './history.css';

export default function Historybranch() {

  const color = ["bg-red-500", "bg-amber-500", "bg-green-500", "bg-cyan-500"]
  const beforeBorderColor = ["before:border-red-500", "before:border-amber-500", "before:border-green-500", "before:border-cyan-500"];
  const afterBorderColor = ["after:border-red-500", "after:border-amber-500", "after:border-green-500", "after:border-cyan-500"];

  const cardData = [
    {
      colorIndex: 0,
      title: "TAHUN 1998",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat debitis, et sapiente tempora ad velit tempore ut",
    },
    {
      colorIndex: 1,
      title: "TAHUN 2003",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat debitis, et sapiente tempora ad velit tempore ut",
    },
    {
      colorIndex: 2,
      title: "TAHUN 2009",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat debitis, et sapiente tempora ad velit tempore ut",
    },
    {
      colorIndex: 3,
      title: "TAHUN 2045",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat debitis, et sapiente tempora ad velit tempore ut",
    }
  ];

  return (
    <div className="relative w-screen min-h-screen py-16 flex justify-center items-center bg-[#2B2B2B]">
      <Image
        src={Logo}
        className="absolute max-w-[640px]"
        alt="logo"
      />
      <div className="relative z-10 flex justify-center">
        <div className="absolute bg-white h-full w-[6px] flex flex-col justify-between items-center">
          <div className="relative -top-1 w-5 h-5 rounded-full bg-white"></div>
          {
            cardData.map((item, index) => (
              <div className={`w-5 h-5 rounded-full ${color[item.colorIndex]}`}></div>
            ))
          }
          <div className="relative -bottom-1 w-5 h-5 rounded-full bg-white"></div>
        </div>
        <div className="flex flex-col py-8">
          {
            cardData.map((item, index) => (
              <div
                key={index}
                className={"w-[900px] flex items-center " + (index % 2 == 0 ? "justify-end " : "justify-start ") + (index !== 0 ? "-mt-[60px]" : "")}
              >
                <div className={`relative p-3 corner-border ${beforeBorderColor[item.colorIndex]} ${afterBorderColor[item.colorIndex]}`}>
                  <div className="bg-[#807D7D] px-6 py-4 text-white w-[360px] h-[150px] flex flex-col gap-2 rounded-lg shadow-[7px_7px_4px_0px_rgba(31,31,31,0.25)]">
                    <h1 className="text-3xl font-medium">{item.title}</h1>
                    <p className="leading-5 tracking-wide text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
