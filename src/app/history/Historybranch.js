import Image from "next/image";
import Logo from "../../../public/image/LogoGede.png";

import "./history.css";

export default function Historybranch() {
  const color = ["bg-red-500", "bg-amber-500", "bg-green-500", "bg-cyan-500"];
  const beforeBorderColor = [
    "before:border-red-500",
    "before:border-amber-500",
    "before:border-green-500",
    "before:border-cyan-500",
  ];
  const afterBorderColor = [
    "after:border-red-500",
    "after:border-amber-500",
    "after:border-green-500",
    "after:border-cyan-500",
  ];

  const cardData = [
    {
      colorIndex: 0,
      title: "2013",
      desc: "In 2013, our story began. Founded by Siti Mardiyah, our company embarked on a journey to redefine printing solutions with a commitment to quality and customer satisfaction.",
    },
    {
      colorIndex: 1,
      title: "2014",
      desc: "In 2014, we entered into a collaboration with PT. Kahatex to create packaging for their garment products, and with Wincheez for handling the packaging of their cheese products.",
    },
    {
      colorIndex: 2,
      title: "2020",
      desc: "The COVID pandemic presented unparalleled challenges that tested our resolve and adaptability. However, in the face of adversity, our team displayed unwavering resilience and commitment to weathering the storm.",
    },
    {
      colorIndex: 3,
      title: "2023",
      desc: "In 2023, we collaborated with one of the major mineral water brands, namely Al-Ma'Soem. We were entrusted with high confidence and are committed to consistently delivering the finest product quality.x`",
    },
  ];

  return (
    <>
        <div className="relative w-screen min-h-screen py-16 justify-center items-center bg-[#2B2B2B] hidden lg:flex">
          <Image src={Logo} className="absolute max-w-[640px]" alt="logo" />
          <div className="relative z-10 flex justify-center">
            <div className="absolute bg-white h-full w-[6px] flex flex-col justify-between items-center">
              <div className="relative -top-1 w-5 h-5 rounded-full bg-white"></div>
              {cardData.map((item, index) => (
                <div
                  key={"dot" + index}
                  className={`w-5 h-5 rounded-full ${color[item.colorIndex]}`}
                ></div>
              ))}
              <div className="relative -bottom-1 w-5 h-5 rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col py-8">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className={
                    "w-[900px] flex items-center " +
                    (index % 2 == 0 ? "justify-end " : "justify-start ") +
                    (index !== 0 ? "-mt-[60px]" : "")
                  }
                >
                  <div
                    className={`relative p-3 corner-border ${
                      beforeBorderColor[item.colorIndex]
                    } ${afterBorderColor[item.colorIndex]}`}
                  >
                    <div className="bg-[#807D7D] px-6 py-4 text-white w-[360px] h-[150px] flex flex-col gap-2 rounded-lg shadow-[7px_7px_4px_0px_rgba(31,31,31,0.25)]">
                      <h1 className="text-3xl font-medium">{item.title}</h1>
                      <p className="leading-5 tracking-wide text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-screen min-h-screen py-16 justify-center items-center bg-[#2B2B2B] flex lg:hidden">
          <Image src={Logo} className="absolute max-w-[320px]" alt="logo" />
          <div className="relative z-10 flex gap-4">
            <div className="bg-white w-[6px] flex flex-col justify-around items-center py-8">
              <div className="absolute -top-1 w-5 h-5 rounded-full bg-white"></div>
              {cardData.map((item, index) => (
                <div
                  key={"dot" + index}
                  className={`w-5 h-5 rounded-full ${color[item.colorIndex]}`}
                ></div>
              ))}
              <div className="absolute -bottom-1 w-5 h-5 rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col py-8">
              {cardData.map((item, index) => (
                <div
                  key={"card" + index}
                  className={`relative p-3 corner-border my-3 ${
                    beforeBorderColor[item.colorIndex]
                  } ${afterBorderColor[item.colorIndex]}`}
                >
                  <div className="bg-[#807D7D] px-4 py-4 text-white w-[280px] h-[180px] flex flex-col gap-2 rounded-lg shadow-[7px_7px_4px_0px_rgba(31,31,31,0.25)]">
                    <h1 className="text-3xl font-medium">{item.title}</h1>
                    <p className="leading-5 tracking-wide text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}
