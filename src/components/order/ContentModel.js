import Image from "next/image";
import Select from "react-select";
import { useState } from "react";

import FourFlap from "../../../public/image/4flap.jpg";
import Overlap from "../../../public/image/Overlap.jpg";
import TelescopeBox from "../../../public/image/telescopebox.jpeg";
import Custom from "../../../public/image/Custom.jpg";

export default function ContentModel({ nextHandler, model, setModel }) {
  const productDesc = {
    FourFlap: (
      <div>
        <p>
          The type and form of a normal or standard box, commonly known as a 4
          Flap box, is a typical box that we often encounter in our daily lives.
          This box is designed in a simple form that meets the dimensions of
          length, width, and height. It comes with a top and bottom flap that
          will meet each other when folded. Boxes of this type are commonly used
          for trade or as stock for goods such as bottled water, food, snacks,
          and many more.
        </p>
      </div>
    ),
    Overlap: (
      <div>
        <p>
          The type of box that falls under the typical overlap category
          essentially has a shape that is almost similar to the standard box
          type. What distinguishes the overlap-shaped box from the
          standard-shaped box is the overlapping top and bottom flaps when
          folded. Boxes of this type are commonly used for packaging or shipping
          products that fall into the garment, plastic, and similar categories.
        </p>
      </div>
    ),
    TelescopeBox: (
      <div>
        <p>
          In contrast to the two previous types of boxes that form a single
          unified unit, the top-bottom type of box has its box divided into a
          top and a bottom section. This type of box has dimensions in terms of
          length, width, and height, where the top part precisely complements
          the size of the bottom part and tightly closes the box. Top-bottom
          boxes are commonly used in the distribution of fabric, food, and spare
          parts.
        </p>
      </div>
    ),
    Custom: (
      <div>
        <p>
          Experience the freedom of customization with our personalized box
          packaging services. At Cahaya Terang Box, we empower our
          users/customers to order box packaging that aligns perfectly with
          their unique preferences and needs. Choose the size, shape, and design
          that suits your product.
        </p>
      </div>
    ),
  };
  const [desc, setDesc] = useState(productDesc.FourFlap);

  const options = [
    { value: "1", label: "4 Flap" },
    { value: "2", label: "Overlap" },
    { value: "3", label: "Telescope Box" },
    { value: "4", label: "Custom" },
  ];

  const handleSelectChange = (selectedOptions) => {
    switch (selectedOptions.label) {
      case "4 Flap":
        setDesc(productDesc.FourFlap);
        setModel({
          image: FourFlap,
          value: "1",
          type: selectedOptions.label,
        });
        break;
      case "Overlap":
        setDesc(productDesc.Overlap);
        setModel({
          image: Overlap,
          value: "2",
          type: selectedOptions.label,
        });
        break;
      case "Telescope Box":
        setDesc(productDesc.TelescopeBox);
        setModel({
          image: TelescopeBox,
          value: "3",
          type: selectedOptions.label,
        });
        break;
      case "Custom":
        setDesc(productDesc.Custom);
        setModel({
          image: Custom,
          value: "4",
          type: selectedOptions.label,
        });
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        <div className="flex-none flex flex-col gap-10">
          <Image
            alt={`${model.type} Model`}
            src={model.image}
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
              value: model.value,
              label: model.type,
            }}
            onChange={handleSelectChange}
          />
        </div>
        <div className="flex flex-col text-justify">
          <div className="text-3xl text-[#EE8300]">{model.type}</div>
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
