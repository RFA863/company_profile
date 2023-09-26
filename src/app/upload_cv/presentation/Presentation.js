"use client";

import Link from "next/link";
import { useState } from "react";

export default function Presentation() {
  const storedData = sessionStorage.getItem("userData");
  const userData = JSON.parse(storedData);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cv_path: null,
    gender: true,
    experience: userData.experience,
    tools_knowledge: userData.tools_knowledge,
    specialist: userData.specialist,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/applicants/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a thank you page
        console.log("POST request successful");
      } else {
        // Handle errors, e.g., display an error message
        console.error("POST request failed");
      }
    } catch (error) {
      console.error("Error while making POST request:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    // Jika input adalah tipe 'file', kita perlu mengambil base64 dari file yang diunggah
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          let cvPath = event.target.result; // Menyimpan base64 ke dalam cvPath

          // Menghapus 'data:application/pdf;base64,' dari awal cvPath
          cvPath = cvPath.replace(/^data:application\/pdf;base64,/, "");

          setFormData((prevData) => ({
            ...prevData,
            cv_path: cvPath,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value === "true", // Mengubah ke boolean
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };
  console.log(formData);
  return (
    <div className="w-[135%]   ml-20  text-[#4D4D4D] ">
      <div className="mt-10 mb-2 font-black text-lg">3 of 3 Completed</div>

      <div className="bg-[#FF6600] w-full h-2 rounded-full"></div>

      <div className="font-black text-4xl mt-10">Presentation</div>
      <form onSubmit={handleSubmit}>
        <div className="text-md border-b-2 border-black pb-4">
          <div className="font-medium text-2xl mt-3 mb-6">Personal Info</div>

          <div>
            <span className="absolute z-[1] mx-2 text-sm -translate-y-3 bg-[#D9D9D9]">
              First and Last Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ex. Jhon Doe"
              className="w-full rounded-md bg-[#D9D9D9] relative mb-6"
            />
          </div>

          <div>
            <span className="absolute z-[1] mx-2 text-sm -translate-y-3 bg-[#D9D9D9]">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ex. Doe@gmail.com"
              className="w-full rounded-md bg-[#D9D9D9] relative mb-6"
            />
          </div>
          <div>
            <span className="absolute z-[1] mx-2 text-sm -translate-y-3 bg-[#D9D9D9]">
              Phone
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ex. +62 12345678"
              className="w-full rounded-md bg-[#D9D9D9] relative"
            />
          </div>

          <div className="font-medium mt-6 mb-2 text-2xl">Gender</div>

          <div className="flex gap-x-8">
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value={true}
                checked={formData.gender === true}
                onChange={handleInputChange}
                className="mr-4 form-radio text-[#FF6600] focus:ring-[#FF6600]"
              />
              <label className="text-xl">Male</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value={false}
                checked={formData.gender === false}
                onChange={handleInputChange}
                className="mr-4 form-radio text-[#FF6600] focus:ring-[#FF6600]"
              />
              <label className="text-xl">Female</label>
            </div>
          </div>

          <div className="font-medium mt-8 mb-4 text-2xl">Upload CV</div>
          <span>(File accepted: pdf, .doc/docx - Max file size: 8MB)</span>
          <input
            type="file"
            name="cv_path"
            onChange={handleInputChange}
            className="w-full rounded-md border p-2 "
          />
        </div>
        <div className="mt-4 flex gap-2 justify-end">
          <Link href="/upload_cv/jobAplication">
            <button className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold">
              Previus
            </button>
          </Link>
          <Link href="/upload_cv/aboutUs">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold"
            >
              Finish
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
