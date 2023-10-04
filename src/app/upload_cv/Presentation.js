export default function Presentation(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = props.validator();
    if (isValid) {
      props.submit();
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    props.changeInput(name, value, type, checked, files);
  };
  const prevPage = () => {
    props.prevPage();
  };
  return (
    <div className=" sm:mx-12 mx-6 sm:mb-0 mb-16 text-[#4D4D4D] ">
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
              value={props.formData.name}
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
              value={props.formData.email}
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
              value={props.formData.phone}
              onChange={handleInputChange}
              placeholder="Ex. 6212345678"
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
                checked={props.formData.gender === true}
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
                checked={props.formData.gender === false}
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
          <button
            onClick={prevPage}
            className="bg-white py-1 px-10 rounded-md text-black font-bold"
          >
            Back
          </button>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}
