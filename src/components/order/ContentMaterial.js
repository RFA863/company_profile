import Image from "next/image";
import Select from "react-select";
import { useState } from "react";

import BFlute from "../../../public/image/B-Flute.png";
import BCFlute from "../../../public/image/BC-Flute.png";
import EFlute from "../../../public/image/E-Flute.png";

export default function ContentMaterial({
  nextHandler,
  material,
  setMaterial,
}) {
  const productDesc = {
    BFlute: (
      <div>
        <p>
          B-Flute (2.5-3.5mm) is the most common flute profile for shipping
          boxes. As it's thicker than E-Flute, it offers more cushioning and
          better puncture resistance, but it still has a smooth surface for
          printing on. This makes it a good, cost-effective alternative to
          E-Flute if you're shipping slightly bigger products but don't want to
          sacrifice too much print performance. Where B-Flute does falter is
          shipping very heavy items. For this, you will need a double-walled
          flute profile (two layers of fluting combined) to give your product
          the most protection.
        </p>
        <br></br>
        <h1>Best For</h1>
        <ul>
          <li> • Shipping boxes</li>
          <li> • Optimising protection</li>
          <li> • Mailer boxes</li>
          <li> • Overall performance</li>
        </ul>
      </div>
    ),
    BCFlute: (
      <div>
        <p>
          BC-Flute is another double-walled material, but this time combining
          B-Flute and C-Flute. It's one of the thickest flute profiles
          (7.0-8.0mm), and as a result one of the most durable, offering great
          cushioning and stacking strength. The downside is that both B-Flute
          and C-Flute are thick flute profiles with a low number of flutes per
          foot. Because of this, BC-Flute doesn;t have the same print
          performance as EB-Flute and instead focuses almost exclusively on
          maximising protection. This is great for sending heavy items or
          stacking shipping boxes, but may not be the best option if branding is
          your priority.
        </p>
        <br></br>
        <h1>Best For</h1>
        <ul>
          <li> • Maximising protection</li>
          <li> • Heavy products</li>
          <li> • Stacking strength</li>
          <li> • Long transits</li>
        </ul>
      </div>
    ),
    EFlute: (
      <div>
        <p>
          E-Flute is one of the thinnest flute profiles with a thickness of
          1.5-2.0mm. This may not sound durable, but E-Flute has a high number
          of flutes (90) per foot. This not only creates the ideal surface for
          printing but offers excellent crush resistance too. E-Flute is also
          easy to fold, and it's this balance of printability, durability and
          usability that makes it common for e-commerce packaging. Sourceful's
          mailer boxes, for example, use E-Flute. Whilst E-Flute performs well
          in smaller sized boxes, its crush resistance starts to decrease at
          larger sizes. So if you're shipping something big or heavy, a thicker
          flute profile may be a better choice for your corrugated packaging.
        </p>
        <br></br>
        <h1>Best For</h1>
        <ul>
          <li> • Small boxes</li>
          <li> • Print performance</li>
        </ul>
      </div>
    ),
  };
  const [desc, setDesc] = useState(productDesc.BFlute);

  const options = [
    { value: "1", label: "B-Flute" },
    { value: "2", label: "BC-Flute" },
    { value: "3", label: "E-Flute" },
  ];

  const handleSelectChange = (selectedOptions) => {
    switch (selectedOptions.label) {
      case "B-Flute":
        setDesc(productDesc.BFlute);
        setMaterial({
          image: BFlute,
          value: "1",
          type: selectedOptions.label,
        });
        break;
      case "BC-Flute":
        setDesc(productDesc.BCFlute);
        setMaterial({
          image: BCFlute,
          value: "2",
          type: selectedOptions.label,
        });
        break;
      case "E-Flute":
        setDesc(productDesc.EFlute);
        setMaterial({
          image: EFlute,
          value: "3",
          type: selectedOptions.label,
        });
        break;
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        <div className="flex-none flex flex-col gap-10">
          <Image
            alt={`${material.type} Model`}
            src={material.image}
            width={1930}
            height={1073}
            className="w-[512px] h-auto"
          />
          <Select
            options={options}
            placeholder={"SELECT MODEL"}
            className="text-center"
            isSearchable={false}
            isClearable={false}
            defaultValue={{
              value: material.value,
              label: material.type,
            }}
            onChange={handleSelectChange}
          />
        </div>
        <div className="flex flex-col text-justify">
          <div className="text-3xl text-[#EE8300]">{material.type}</div>
          <div className="text-xl">{desc}</div>
        </div>
      </div>
      <div className="flex justify-end border-t border-[#4D4D4D]">
        <button
          onClick={nextHandler}
          className="text-center text-2xl text-[#EEEEEE] bg-[#EE8300] rounded-lg px-20 py-1 mt-10"
        >
          SELANJUTNYA
        </button>
      </div>
    </div>
  );
}
