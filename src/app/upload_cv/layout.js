import Hiring from "./aboutUs/Hiring";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen  overflow-hidden bg-[#D9D9D9] ">
      <body className="w-full ">
        <div className="flex absolute z-[1]">
          <Hiring />
          {children}
        </div>
      </body>
    </html>
  );
}
