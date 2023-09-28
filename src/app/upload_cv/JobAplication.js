import CreatableSelect from "react-select/creatable";

export default function JobAplication(props) {
  const options = [
    { value: "1 >", label: "1 year less" },
    { value: "1-2", label: "1 - 2 year" },
    { value: "1-3", label: "1 - 3 year" },
    { value: "1-4", label: "1 - 4 year" },
    { value: "5 <", label: "5 years more" },
  ];

  const validator = () => {
    const isValid = props.validator(); // Panggil validator pada parent

    if (isValid) {
      props.nextPage(); // Panggil nextPage jika validasi berhasil
    }
  };

  const handleSelectChange = (selectedOption) => {
    props.changeSelect(selectedOption);
  };

  const handleCheckboxChange = (id, checked) => {
    props.changeCheckbox(id, checked);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    props.changeInput(name, value, type, checked);
  };
  const prevPage = () => {
    props.prevPage();
  };
  return (
    <div className="sm:mx-12 mx-6 sm:mb-0 mb-16 text-[#4D4D4D] ">
      <div className="mt-10 mb-2 font-black text-lg">2 of 3 Completed</div>
      <div className="relative">
        <div className="bg-[#FF6600] w-2/3 h-2 rounded-full absolute z-[1]"></div>
        <div className="bg-white w-full h-2 rounded-full "></div>
      </div>
      <div className="font-black text-4xl mt-10">Job Application</div>
      <div className="text-md border-b-2 border-black pb-4">
        <div className="font-medium text-2xl mt-3 mb-6">Packaging Employee</div>
        <div className="font-medium text-2xl mb-3 ">Years of experience </div>

        <span className="mx-2 text-sm">Choose a range</span>

        <CreatableSelect
          isClearable
          options={options}
          placeholder="1 - 2 years"
          value={options.find(
            (option) => option.value === props.formData.experience
          )}
          onChange={handleSelectChange}
          required
        />

        <div className="font-medium my-8 text-2xl">
          Select your main specialist
        </div>

        <div className="flex  flex-wrap items-center">
          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="packagingSpecialist"
              checked={props.formData.specialist.includes(
                "packagingSpecialist"
              )}
              onChange={(e) =>
                handleCheckboxChange("packagingSpecialist", e.target.checked)
              }
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
              required
            />
            <label htmlFor="packagingSpecialist" className="pl-4">
              Packaging Design Specialist
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="qualityControlInspector"
              checked={props.formData.specialist.includes(
                "qualityControlInspector"
              )}
              onChange={(e) =>
                handleCheckboxChange(
                  "qualityControlInspector",
                  e.target.checked
                )
              }
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
              required
            />
            <label htmlFor="qualityControlInspector" className="pl-4">
              Quality Control Inspector
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="salesManager"
              checked={props.formData.specialist.includes("salesManager")}
              onChange={(e) =>
                handleCheckboxChange("salesManager", e.target.checked)
              }
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
              required
            />
            <label htmlFor="salesManager" className="pl-4">
              Sales and Business Development Manager
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="productionSupervisor"
              checked={props.formData.specialist.includes(
                "productionSupervisor"
              )}
              onChange={(e) =>
                handleCheckboxChange("productionSupervisor", e.target.checked)
              }
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
              required
            />
            <label htmlFor="productionSupervisor" className="pl-4">
              Production Line Supervisor
            </label>
          </div>

          <div className="basis-1/3 flex items-center">
            <input
              type="checkbox"
              id="supplyCoordinator"
              checked={props.formData.specialist.includes("supplyCoordinator")}
              onChange={(e) =>
                handleCheckboxChange("supplyCoordinator", e.target.checked)
              }
              className="w-8 h-8 bg-[#FF6600] border rounded-md focus:ring-0"
              required
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
          value={props.formData.tools_knowledge}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          className="bg-white py-1 px-10 rounded-md text-black font-bold"
          onClick={prevPage}
        >
          Back
        </button>
        <button
          className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold"
          onClick={validator}
        >
          Next
        </button>
      </div>
    </div>
  );
}
