"use client";

import { Connect } from "./_components/Connect";
import { Contact } from "./_components/Contact";
import { Showcase } from "./_components/Showcase";

export default function About() {
  return (
    <main className="w-full mx-auto">
      <Showcase />
      <Connect />
      <Contact />
    </main>
  );
}
