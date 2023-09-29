"use client";

import StatusMenu from "./StatusMenu";

export default function Status({ model, dimension, material }) {
  return (
    <div className="flex p-6 bg-[#D9D9D9]">
      <StatusMenu model={model} dimension={dimension} material={material} />
    </div>
  );
}
