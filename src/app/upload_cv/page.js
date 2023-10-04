"use client";

import { roboto } from "../fonts";
import Hiring from "./Hiring";
import AboutUs from "./AboutUs";
import Presentation from "./Presentation";
import JobAplication from "./JobAplication";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    specialist: [],
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
    let specialistArray = [...formData.specialist];

    if (checked) {
      specialistArray.push(id);
    } else {
      specialistArray = specialistArray.filter(item => item !== id);
    }

    setFormData((prevData) => ({
      ...prevData,
      specialist: specialistArray,
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
      if (type === "tel" && !/^\d{0,15}$/.test(value)) return;

      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const validator = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;
    const phoneNumber = formData.phone.slice(0, 2);
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (halaman === 2) {
      if (!formData.experience) {
        toast.error("The experience field cannot be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      }

      if (!formData.specialist) {
        toast.error("Please select at least one specialization.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      }

      if (!formData.tools_knowledge) {
        toast.error("The Knowledge Tools field can't be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      } else if (formData.tools_knowledge.length > 50) {
        toast.error("The Knowledge Tool field must not exceed 50 characters.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      }
      // if (!isChecked) {
      //   alert("Harap pilih setidaknya satu spesialisasi.");
      //   return false;
      // }
    }
    if (halaman === 3) {
      if (!formData.name) {
        toast.error("The name field cannot be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      } else if (formData.name.length > 50) {
        toast.error("The name field must not exceed 50 characters.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return false;
      }

      if (!formData.email) {
        toast.error("The email field cannot be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      } else if (formData.email.length > 25) {
        toast.error("The email field must not exceed 25 characters.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }

      if (!formData.phone) {
        toast.error("The phone number cannot be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      } else if (phoneNumber !== "62") {
        toast.error("The phone number is not correct", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
      else if (formData.phone.length > 15) {
        toast.error("The phone number must not exceed 15 characters.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (!formData.cv_path) {
        toast.error("CV file cannot be empty.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/applicants/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      ).then((res) => res.json());
      console.log(res);
      if (res.status === 200) {
        // Handle success, e.g., redirect to a thank you page
        console.log("POST request successful");
        toast.success("Data successfully saved.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        firstPage();
      } else if (res.status === 400) {
        if (res.data.code === -2) {
          toast.error("The file format must be PDF.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else if (res.status === 403) {
        if (res.data.code === -1) {
          toast.error("The phone number has already been used.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.data.code === -3) {
          toast.error("The file size must not exceed 8 MB.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        // Handle errors, e.g., display an error message
        console.error("POST request failed");
      }
    } catch (error) {
      toast.error("Post failed due to server error. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.error("Error while making POST request:", error);
    }
  };


  return (
    <main>
      <div
        className={`${roboto.className} flex sm:flex-nowrap flex-wrap w-screen overflow-x-hidden  bg-[#D9D9D9] `}
      >
        <Hiring className="sm:basis-1/3" />
        <div className="sm:basis-2/3">
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </main>
  );
}
