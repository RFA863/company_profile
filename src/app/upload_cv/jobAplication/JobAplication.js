"use client";

import Link from "next/link";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";

export default function JobAplication() {
  const options = [
    { value: "1 >", label: "1 year less" },
    { value: "1-2", label: "1 - 2 year" },
    { value: "1-3", label: "1 - 3 year" },
    { value: "1-4", label: "1 - 4 year" },
    { value: "5 <", label: "5 years more" },
  ];

  const [dataToSend, setDataToSend] = useState({
    experience: "", // Inisialisasi dengan nilai kosong
    tools_knowledge: "", // Inisialisasi dengan nilai kosong
    specialist: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setDataToSend((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setDataToSend((prevData) => ({
      ...prevData,
      experience: selectedOption ? selectedOption.value : "", // Memperbarui nilai experience dari selectedOption
    }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    const specialistArray = [...dataToSend.specialist.split(",")];

    if (checked) {
      specialistArray.push(id);
    } else {
      const index = specialistArray.indexOf(id);
      if (index !== -1) {
        specialistArray.splice(index, 1);
      }
    }

    const specialistString = specialistArray.join(",");

    setDataToSend((prevData) => ({
      ...prevData,
      specialist: specialistString,
    }));
  };
  const handleNextButtonClick = () => {
    // Menyimpan data ke sessionStorage sebelum navigasi ke halaman selanjutnya
    sessionStorage.setItem("userData", JSON.stringify(dataToSend));
  };
  console.log(dataToSend);
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
          onChange={handleSelectChange}
          value={options.find(
            (option) => option.value === dataToSend.experience
          )}
        />

        <div className="font-medium my-8 text-2xl">
          Select your main specialist
        </div>

        <div className="flex  flex-wrap items-center">
          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="packagingSpecialist"
              checked={dataToSend.specialist.includes("packagingSpecialist")}
              onChange={handleCheckboxChange}
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
              checked={dataToSend.specialist.includes(
                "qualityControlInspector"
              )}
              onChange={handleCheckboxChange}
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
              checked={dataToSend.specialist.includes("salesManager")}
              onChange={handleCheckboxChange}
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
              checked={dataToSend.specialist.includes("productionSupervisor")}
              onChange={handleCheckboxChange}
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
              checked={dataToSend.specialist.includes("supplyCoordinator")}
              onChange={handleCheckboxChange}
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
          name="tools_knowledge"
          placeholder="Ex. Quality Control.."
          className="w-full rounded-md"
          value={dataToSend.tools_knowledge}
          onChange={handleTextChange}
        />
      </div>
      <div className="text-right mt-4">
        <Link href="/upload_cv/presentation">
          <button
            className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold"
            onClick={handleNextButtonClick}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
