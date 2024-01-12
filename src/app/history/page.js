"use client";

import Header from "./Header";
import Historypage from "./Historypage";
import Historybranch from "./Historybranch";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Historypage />
      <Historybranch />
    </main>
  );
}
