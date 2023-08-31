"use client";

import Link from "next/link";
import CreatableSelect from "react-select/creatable";

export default function JobAplication() {
  const options = [
    { value: "1 >", label: "1 year less" },
    { value: "1-2", label: "1 - 2 year" },
    { value: "1-3", label: "1 - 3 year" },
    { value: "1-4", label: "1 - 4 year" },
    { value: "5 <", label: "5 years more" },
  ];

  return (
    <div className="w-[135%]   ml-20  text-[#4D4D4D] ">
      <div className="mt-10 mb-2 font-black text-lg">2 of 3 Completed</div>
      <div className="bg-white w-[135%] h-2 rounded-full absolute"></div>
      <div className="bg-[#FF6600] w-[90%] h-2 rounded-full absolute z-[1]"></div>

      <div className="font-black text-4xl mt-10">Job Application</div>

      <div className="text-md border-b-2 border-black pb-4">
        <div className="font-medium text-2xl mt-3 mb-6">Packaging Employee</div>
        <div className="font-medium text-2xl mb-3 ">Years of experience </div>

        <span className="mx-2 text-sm">Choose a range</span>

        <CreatableSelect
          isClearable
          options={options}
          placeholder="1 - 2 years"
        />

        <div className="font-medium my-8 text-2xl">
          Select your main specialist
        </div>

        <div className="flex  flex-wrap items-center">
          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="packagingSpecialist"
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
            />
            <label htmlFor="packagingSpecialist" className="pl-4">
              Packaging Design Specialist
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="qualityControlInspector"
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
            />
            <label htmlFor="qualityControlInspector" className="pl-4">
              Quality Control Inspector
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="salesManager"
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
            />
            <label htmlFor="salesManager" className="pl-4">
              Sales and Business Development Manager
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="productionSupervisor"
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
            />
            <label htmlFor="productionSupervisor" className="pl-4">
              Production Line Supervisor
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="supplyCoordinator"
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
            />
            <label htmlFor="supplyCoordinator" className="pl-4">
              Supply Chain Coordinator
            </label>
          </div>
        </div>

        <div className="font-medium my-8 text-2xl">Tools Knowladge</div>

        <input
          type="text"
          placeholder="Ex. Quality Control.."
          className="w-full rounded-md"
        />
      </div>
      <div className="text-right mt-4">
        <Link href="/upload_cv/presentation">
          <button className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
