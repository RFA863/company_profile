"use client";

import Header from "./header";

import Content3 from "./content3";
import Content3New from "./content3_new";
import Footer from "./footer";
import Content4 from "./content4";

import Content_1Frahari from "./Content_1.Frahari";
import Content_2Frahari from "./Content_2.Frahari";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Content_1Frahari />
      <Content_2Frahari />
      <Content3New />
      <Content4 />
      <Footer />
    </main>
  );
}
