import "./globals.css";
import { bebas_Neue } from "./fonts";

export const metadata = {
  title: "Company Profile",
  description: "CV. Cahaya Terang Company Profile ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas_Neue.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
