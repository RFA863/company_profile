"use client";

import AboutUs from "./AboutUs";
import JobAplication from "./JobAplication";
import Presentation from "./Presentation";

import { useState } from "react";

export default function upload_cv() {
  const [halaman, setHalaman] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cv_path: null,
    gender: true,
    experience: "",
    tools_knowledge: "",
    specialist: "",
  });

  const nextPage = () => {
    setHalaman(halaman + 1);
  };

  const prevPage = () => {
    setHalaman(halaman - 1);
  };

  const firstPage = () => {
    setHalaman(1);
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      experience: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleCheckboxChange = (id, checked) => {
    const specialistArray = [...formData.specialist.split(",")];

    if (checked) {
      specialistArray.push(id);
    } else {
      const index = specialistArray.indexOf(id);
      if (index !== -1) {
        specialistArray.splice(index, 1);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      specialist: specialistArray.join(","),
    }));
  };

  const handleInputChange = (name, value, type, checked, files) => {
    // Jika input adalah tipe 'file', kita perlu mengambil base64 dari file yang diunggah
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          let cvPath = event.target.result;
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

  const validator = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;
    let errorMessages = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (halaman === 2) {
      if (!formData.experience) {
        alert("Pengalaman harus diisi.");
        return false;
      }

      if (!formData.specialist) {
        alert("Harap pilih setidaknya satu spesialisasi.");
        return false;
      }

      if (!formData.tools_knowledge) {
        alert("Knowledge Tools harus diisi.");
        return false;
      } else if (formData.tools_knowledge.length > 50) {
        alert("Knowledge Tools tidak boleh lebih dari 50 karakter.");
        return false;
      }
      if (!isChecked) {
        alert("Harap pilih setidaknya satu spesialisasi.");
        return false;
      }
    }
    if (halaman === 3) {
      if (!formData.name) {
        alert("Nama tidak boleh kosong");
        return false;
      } else if (formData.name.length > 50) {
        alert("nama tidak boleh lebih dari 50 karakter.");
        return false;
      }

      if (!formData.email) {
        alert("email tidak boleh kosong");
        return false;
      } else if (formData.email.length > 25) {
        alert("email tidak boleh lebih dari 25 karakter");
        return false;
      }

      if (!formData.phone) {
        alert("No. Handphone tidak boleh kosong");
        return false;
      } else if (formData.phone.length > 15) {
        alert("No handphone tidak boleh lebih dari 15 karakter");
      }

      if (!formData.cv_path) {
        alert("File CV tidak boleh kosong");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
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
        firstPage();
      } else {
        // Handle errors, e.g., display an error message
        console.error("POST request failed");
      }
    } catch (error) {
      console.error("Error while making POST request:", error);
    }
  };

  return (
    <main>
      <div className="absolute z-[1] w-full ">
        {halaman === 1 && <AboutUs hal={halaman} nextPage={nextPage} />}
        {halaman === 2 && (
          <JobAplication
            hal={halaman}
            validator={validator}
            prevPage={prevPage}
            nextPage={nextPage}
            changeSelect={handleSelectChange}
            changeCheckbox={handleCheckboxChange}
            changeInput={handleInputChange}
            formData={formData}
          />
        )}
        {halaman === 3 && (
          <Presentation
            hal={halaman}
            prevPage={prevPage}
            formData={formData}
            changeInput={handleInputChange}
            validator={validator}
            submit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
}
