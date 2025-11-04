"use client";

import { Experience } from "./_components/experience";
import { Showcase } from "./_components/showcase";
import { Stack } from "./_components/stack";
import { Stats } from "./_components/stats";

export default function About() {
  return (
    <main className="w-full mx-auto">
      <Showcase />
      <Experience />
      <Stack />
      <Stats />
    </main>
  );
}
