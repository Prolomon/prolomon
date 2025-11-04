"use client";

import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Building high-performance, accessible web apps with React/Next.js, TypeScript, Tailwind, and modern tooling.",
    href: "/contact",
  },
  {
    title: "API & Backend Engineering",
    description:
      "Designing RESTful, integrating databases (Postgres/Mongo), authentication, and cloud deployment.",
    href: "/contact",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating beautiful designs into pixel-perfect, responsive interfaces with component systems and theming.",
    href: "/contact",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Improving Core Web Vitals, code-splitting, caching, and metadata for discoverability and speed.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section className="w-full mx-auto py-12">
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-5 md:p-6"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            {s.href && (
              <div className="mt-4">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Start a project
                  <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
