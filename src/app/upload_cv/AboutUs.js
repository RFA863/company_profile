export default function AboutUs(props) {
  const nextPage = () => {
    props.nextPage();
  };

  return (
    <div className="sm:mx-12 mx-6 sm:mb-0 mb-16  ">
      <div className="mt-10 mb-2 font-black text-lg">1 of 3 Completed</div>
      <div className="relative">
        <div className="bg-[#FF6600] w-1/3 h-2 rounded-full absolute z-[1]"></div>
        <div className="bg-[#FFFFFF] w-full h-2 rounded-full "></div>
      </div>
      <div className="font-black text-4xl text-[#4D4D4D] mt-10">About Us</div>
      <div className="text-md border-b-2 border-black pb-4 text-justify">
        <p>
          🌟 Why Choose Box Industries? 🌟 <br />
          📈 Innovation at its Best: Be part of a dynamic team that thrives on
          innovation. We are at the forefront of developing cutting-edge
          packaging solutions that cater to diverse sectors, revolutionizing the
          way products are protected, stored, and transported. <br />
        </p>
        <p>
          🙌 Collaborative Environment: We believe in the power of
          collaboration. Join a workforce that encourages creativity, values
          different perspectives, and promotes open communication. Your ideas
          will not only be heard but also embraced. <br />
        </p>
        <p>
          🔧 Skill Enhancement: Box Industries is a hub of learning and growth.
          With regular workshops, skill-building sessions, and opportunities for
          professional development, you'll be empowered to reach new heights in
          your career. <br />
        </p>
        <p>
          💡 Purpose-Driven Work: Every day, we contribute to the success
          stories of countless businesses by providing them with packaging that
          ensures their products reach customers intact. Your work at Box
          Industries will have a meaningful impact on industries worldwide.
        </p>
        <p>🏭 Current Openings 🏭 </p>
        <ol className="list-decimal ml-6">
          <li>Packaging Design Specialist</li>
          <li>Production Line Supervisor</li>
          <li>Quality Control Inspector</li>
          <li>Supply Chain Coordinator </li>
          <li> Sales and Business Development Manager</li>
        </ol>
        <p>
          No matter your expertise, whether you're a creative thinker, a
          technical expert, or a strategic planner, there's a place for you in
          our family.
        </p>
      </div>

      <div className="text-right mt-4">
        <button
          onClick={nextPage}
          className="bg-[#FF6600] py-1 px-10 rounded-md text-white font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
