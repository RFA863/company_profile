export default function ContentUkuran({
  nextHandler,
  dimension,
  setDimension,
}) {
  return (
    <div>
      <div className="text-3xl text-[#4D4D4D]">TENTUKAN UKURANNYA</div>
      <div className="mt-14">
        <div className="flex flex-col gap-12">
          <div>
            <div className="text-2xl text-[#4D4D4D]">PANJANG (cm)</div>
            <input
              className="rounded py-1 pr-36 px-2"
              placeholder="Input panjang"
              type="text"
              value={dimension.panjang}
              onChange={(e) => {
                if (isNaN(e.target.value) || e.target.value.includes(" "))
                  return;

                setDimension({ ...dimension, panjang: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="text-2xl text-[#4D4D4D]">LEBAR (cm)</div>
            <input
              className="rounded py-1 pr-36 px-2"
              placeholder="Input lebar"
              type="text"
              value={dimension.lebar}
              onChange={(e) => {
                if (isNaN(e.target.value) || e.target.value.includes(" "))
                  return;

                setDimension({ ...dimension, lebar: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="text-2xl text-[#4D4D4D]">TINGGI (cm)</div>
            <input
              className="rounded py-1 pr-36 px-2"
              placeholder="Input tinggi"
              type="text"
              value={dimension.tinggi}
              onChange={(e) => {
                if (isNaN(e.target.value) || e.target.value.includes(" "))
                  return;

                setDimension({ ...dimension, tinggi: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end border-t border-[#4D4D4D] mt-40">
        <button
          className="text-center text-2xl text-[#EEEEEE] bg-[#EE8300] rounded-lg px-20 py-1 mt-10"
          onClick={nextHandler}
        >
          SELANJUTNYA
        </button>
      </div>
    </div>
  );
}
