import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Company Profile",
  description: "CV. Cahaya Terang Company Profile ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas_Neue.className}>{children}</body>
    </html>
  );
}
