"use client";

import "./globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { bebas_Neue } from "./fonts";
import { useLayoutEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const metadata = {
  title: "Cahaya Terang",
  description: "CV. Cahaya Terang Company Profile ",
};

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <html lang="en">
      <body className={`${bebas_Neue.className} overflow-x-hidden`}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  );
}
