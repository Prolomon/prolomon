"use client";

import Showcase from "./_components/showcase";
import Services from "./_components/services";
import Demo from "./_components/demo";

export default function Service() {
  return (
    <main className="w-full mx-auto">
      <Showcase />
      <Services />
      <Demo />
    </main>
  );
}
