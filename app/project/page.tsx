"use client";

import { Showcase } from "./_components/Showcase";
import { ProjectList } from "./_components/ProjectList";

export default function ProjectPage() {
  return (
    <main className="w-full mx-auto">
      <Showcase />
      <ProjectList />
    </main>
  );
}
