"use client";

import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  client?: string;
  challenge?: string;
  stack?: string[];
  image: string;
  href?: string;
};

const defaultProjects: Project[] = [
  {
    title: "Website Development for K-DECK",
    client: "K-DECK Professional Services",
    challenge:
      "Develop fully responsive website with modern design and SEO optimization",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/images/showcase.jpg",
    href: "https://kdeckprofessionalservices.com.ng",
  },
  {
    title: "Ride Booking & Sharing Application",
    client: "Personal Project",
    challenge:
      "Build a full-stack ride booking and sharing app with real-time tracking",
    stack: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Tauri",
      "PostgreSQL",
      "MongoDB",
    ],
    image: "/images/collaborate.jpg",
    href: "https://drovenland.vercel.app/",
  },
];

function MetaItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function ProjectList({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) {
  return (
    <section className="w-full mx-auto py-10">
      <div className="mb-8 md:mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Crafting Digital Excellence
        </h1>
        <p className="text-muted-foreground mt-2">
          Explore a selection of my standout projects.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((p, idx) => (
          <article
            key={p.title + idx}
            className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                {p.title}
              </h2>
              <div className="mt-5 space-y-2">
                <MetaItem label="Client" value={p.client} />
                <MetaItem label="Challenge" value={p.challenge} />
                {p.stack && (
                  <div className="grid grid-cols-[80px_1fr] gap-3 text-sm">
                    <span className="text-muted-foreground">Stack</span>
                    <span>{p.stack.join(", ")}</span>
                  </div>
                )}
              </div>
              {p.href && (
                <div className="mt-5">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View case study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>

            {p?.href ? (
              <div className="relative w-full order-1 md:order-2 aspect-[16/9] overflow-hidden border border-gray-300 rounded-xl">
                <iframe
                  src={p.href}
                  title={p.title}
                  className="absolute top-0 left-0 border-0 scale-[0.46] origin-top-left pointer-events-none w-[1280px] h-[800px]"
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted order-1 md:order-2">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
