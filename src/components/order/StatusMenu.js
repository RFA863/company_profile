"use client";

import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StatusMenu({ model, dimension, material }) {
  const [harga, setHarga] = useState(null);

  const checkDimension = () => {
    if (
      dimension.panjang === "0" ||
      dimension.panjang === "" ||
      dimension.lebar === "0" ||
      dimension.lebar === "" ||
      dimension.tinggi === "0" ||
      dimension.tinggi === ""
    ) {
      toast.error("Inputan Tidak Boleh Berisi Nol", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    } else if (
      Number(dimension.panjang) > 500 ||
      Number(dimension.lebar) > 500 ||
      Number(dimension.tinggi) > 500
    ) {
      toast.error("Inputan Tidak Boleh Lebih Dari 500 CM", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }

    return true;
  };

  const cekHarga = async () => {
    if (!checkDimension()) {
      return;
    }

    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/price/check", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        panjang: Number(dimension.panjang),
        lebar: Number(dimension.lebar),
        tinggi: Number(dimension.tinggi),
        bahan: material.type,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    if (res.status === 200) {
      setHarga(res.data);
    }
  };

  useEffect(() => {
    setHarga(null);
  }, [model, dimension, material]);

  return (
    <div className="flex flex-col text-2xl text-[#4D4D4D] w-64">
      <div>MODEL BOX</div>
      <div className="flex justify-between items-center pb-4 gap-4 border-b border-[#4D4D4D]">
        <Image
          alt={`${model.type} Model`}
          src={model.image}
          width={96}
          height={96}
          className="flex-none w-[123px] h-[72px] bg-gray-400"
        />
        <div className="text-base text-[#4D4D4D]">{model.type}</div>
      </div>
      <div className="flex justify-between items-center border-b border-[#4D4D4D] py-2">
        <div>UKURAN</div>
        <div className="text-base">
          {dimension.panjang && dimension.lebar && dimension.tinggi
            ? dimension.panjang +
              " x " +
              dimension.lebar +
              " x " +
              dimension.tinggi +
              " (cm)"
            : ""}
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-[#4D4D4D] py-2">
        <div>Material</div>
        <div className="text-base">{material.type}</div>
      </div>
      <button
        className="text-center text-2xl text-[#EEEEEE] bg-[#EE8300] rounded-lg px-1 py-2 my-6"
        onClick={cekHarga}
      >
        CEK HARGA
      </button>
      {harga && (
        <div className="flex justify-between items-center border-b border-[#4D4D4D] py-2">
          <div>PERKIRAAN HARGA</div>
          <div className="text-base text-[#B90000]">{harga}</div>
        </div>
      )}
      <button
        className="flex items-center justify-center gap-2 text-2xl text-[#EEEEEE] bg-[#25D366] rounded-lg py-2 mt-5"
        onClick={() => {
          if (!checkDimension()) {
            return;
          }
          window.open(
            `https://api.whatsapp.com/send/?phone=6287711173404&text=Halo, saya ingin pesan box dengan detail: Model = ${model.type}, Panjang = ${dimension.panjang} cm, Lebar = ${dimension.lebar} cm, Tinggi = ${dimension.tinggi} cm, Bahan = ${material.type}&type=phone_number&app_absent=0`
          );
        }}
      >
        <BsWhatsapp className="w-5 h-5" />
        <p>PESAN</p>
      </button>
      <Link href="/.">
        <button className="text-center text-2xl text-[#4D4D4D] bg-[#EEEEEE] rounded-lg py-2 px-5 mt-5">
          KEMBALI KE HALAMAN UTAMA
        </button>
      </Link>
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
  );
}
