import "./globals.css";
import { bebas_Neue } from "./fonts";
import InitComponent from "./InitComponent";

export const metadata = {
  title: "Cahaya Terang",
  description: "CV. Cahaya Terang Company Profile ",
  description: "CV. Cahaya Terang Company Profile is your reliable partner for high-quality cardboard printing. We deliver the best quality in every cardboard product we produce. High-quality materials and advanced production processes ensure customer satisfaction.",
  category: "company, box, kardus, bandung",
  other: {
    custom: ['cahayaterang', 'cahayaterangbox', 'cahaya terang', 'cahaya terang box', 'perusahaan kardus', 'kardus', 'bandung'],
    tag: ['cahayaterang', 'cahayaterangbox', 'cahaya terang', 'cahaya terang box', 'perusahaan kardus', 'kardus', 'bandung']
  },
  openGraph: {
    title: "Cahaya Treang",
    description: "CV. Cahaya Terang Company Profile is your reliable partner for high-quality cardboard printing. We deliver the best quality in every cardboard product we produce. High-quality materials and advanced production processes ensure customer satisfaction.",
    url: "https://cahayaterang.id",
    siteName: "Cahaya Terang",
    local: "id_ID",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googlebot: {
      index: true,
      follow: true
    }
  }
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
