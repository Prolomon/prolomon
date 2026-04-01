import { Showcase } from "../../components/showcase";
import { About } from "@/components/about";
import { Project } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Showcase />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
