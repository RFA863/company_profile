import Image from "next/image";

export default function SidebarMenu({
  image,
  text,
  clickHandler,
  selectedMenu,
}) {
  return (
    <div
      className={
        "pt-4 px-4 pb-2 flex flex-col gap-2 rounded-lg cursor-pointer " +
        (selectedMenu === text ? "bg-[#EE8300]" : "")
      }
      onClick={clickHandler}
    >
      <Image
        alt="Sidebar Menu"
        src={image}
        width={96}
        height={96}
        className="w-20 h-20"
      />
      <h2 className="text-center text-2xl">{text}</h2>
    </div>
  );
}
