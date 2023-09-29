import Image from "next/image";

export default function StatusMenu({ model, dimension, material }) {
  const cekHarga = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/price/check", {
      method: "POST",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        panjang: Number(dimension.panjang),
        lebar: Number(dimension.lebar),
        tinggi: Number(dimension.tinggi),
        bahan: material.type,
      }),
    }).then((res) => {
      console.log(res.json());
    });
  };

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
        className="text-center text-2xl text-[#EEEEEE] bg-[#EE8300] rounded-lg px-1 py-1 my-6"
        onClick={cekHarga}
      >
        CEK HARGA
      </button>
      {/* <div className="flex justify-between items-center border-b border-[#4D4D4D] py-2">
        <div>{harga}</div>
        <div className="text-base text-[#B90000]">{textHarga}</div>
      </div> */}
      <button className="text-center text-2xl text-[#4D4D4D] bg-[#EEEEEE] rounded-lg py-1 mt-56">
        KEMBALI KE HALAMAN UTAMA
      </button>
    </div>
  );
}
