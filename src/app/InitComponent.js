"use client";

import "aos/dist/aos.css";
import AOS from "aos";

import { useLayoutEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function InitComponent({ children }) {
    useLayoutEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <ParallaxProvider>{children}</ParallaxProvider>
    );
}
