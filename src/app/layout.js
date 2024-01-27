import "./globals.css";
import { bebas_Neue } from "./fonts";
import InitComponent from "./InitComponent";

export const metadata = {
  title: "Cahaya Terang",
  description: "CV. Cahaya Terang Company Profile ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas_Neue.className} overflow-x-hidden`}>
        <InitComponent>{children}</InitComponent>
      </body>
    </html>
  );
}
