import Image from "next/image";
import Background_2 from "../../../public/image/background_2.png";

export default function Historypage() {
  const missionData = [
    <p>
      "To be a committed and reliable customer partner in providing the best
      service across all aspects of customer satisfaction ."
    </p>,
    <p>
      "Creating a harmonious work atmosphere that balances productivity
      optimization and comfort, with a focus on the well-being of all elements
      of the company."
    </p>,
    <p>
      "Maximizing the implementation of risk, operational, marketing, financial,
      human resources, technology, and information management in a synergistic
      and comprehensive manner."
    </p>,
    <p>
      "Applying the principles of prudence in every decision-making process and
      good corporate governance."
    </p>,
  ];

  return (
    <div
      className="relative w-screen h-screen flex items-center select-none py-20 px-6 justify-center"
      id="content2"
    >
      <Image
        src={Background_2}
        className="absolute -z-10 top-0 left-0 brightness-50 object-cover h-screen sm:w-screen sm:h-screen sm:bg-cover"
        alt="bg-content2"
      />
      <div className="flex flex-col items-center gap-3 tracking-wider">
        <h1 className="text-3xl sm:text-9xl text-[#EE8300]">
          VISSION <span className="text-white">AND</span> MISSION
        </h1>
        <div className="max-w-[1248px] flex flex-col bg-[#EE8300] text-white p-4 rounded-md drop-shadow-xl">
          <h2 className="text-2xl">VISSION</h2>
          <p className="text-xl">
            To be a credible company in the packaging manufacturing industry
            that emphasizes sustainable development, customer satisfaction, and
            the well-being of stakeholders through good corporate governance and
            commitment to social responsibility.
          </p>
        </div>
        <div className="flex gap-4">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="bg-[#645954] w-[300px] min-h-[240px] p-4 flex flex-col text-white text-xl rounded-md"
            >
              <h2>MISSION {index + 1}</h2>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
