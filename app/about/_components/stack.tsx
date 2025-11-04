"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

// Data structure for the tech stack
const techStack = [
  {
    id: 1,
    icon: "/images/html.png",
    title: "HTML",
    description:
      "Used to structure and present content on the web with clean, semantic markup for accessibility and SEO.",
  },
  {
    id: 2,
    icon: "/images/css.png",
    title: "CSS",
    description:
      "Responsible for styling and layout, enabling responsive, modern, and visually engaging web interfaces.",
  },
  {
    id: 3,
    icon: "/images/tailwind.png",
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs directly in your markup.",
  },
  {
    id: 4,
    icon: "/images/javascript.png",
    title: "JavaScript (ES6+)",
    description:
      "Adds interactivity and dynamic functionality to web pages using modern ECMAScript features and best practices.",
  },
  {
    id: 5,
    icon: "/images/jquery.png",
    title: "jQuery",
    description:
      "A fast, small, and feature-rich JavaScript library that simplifies HTML document traversal, event handling, and animation.",
  },
  {
    id: 6,
    icon: "/images/react.png",
    title: "React",
    description:
      "A component-based JavaScript library for building fast, scalable, and interactive user interfaces efficiently.",
  },
  {
    id: 7,
    icon: "/images/nodejs.png",
    title: "Node.js & Express",
    description:
      "Backend runtime and framework for building scalable, high-performance APIs and server-side applications.",
  },
  {
    id: 8,
    icon: "/images/mongo.png",
    title: "Mongo DB",
    description:
      "A NoSQL database designed for scalability, flexibility, and high performance in handling large data sets.",
  },
  {
    id: 9,
    icon: "/images/postgres.png",
    title: "Postgres SQL",
    description:
      "An advanced open-source relational database providing powerful querying, indexing, and data integrity features.",
  },
  {
    id: 10,
    icon: "/images/expo.jpg",
    title: "React Native",
    description:
      "Framework for building cross-platform mobile apps using JavaScript and React with native performance.",
  },
  {
    id: 11,
    icon: "/images/git.png",
    title: "Git & Version Control",
    description:
      "Essential for tracking code changes, collaboration, and maintaining clean, organized project history.",
  },
  {
    id: 12,
    icon: "/images/rest.png",
    title: "REST API",
    description:
      "Architectural style for designing scalable and maintainable web services using standard HTTP methods.",
  },
];

const StackCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  // HeroUI-style card with hover effects
  <Card className="p-4 duration-300">
    <CardHeader className="flex mb-4 items-center gap-3">
      <Image src={icon} width={50} height={50} className="block" alt={title} />

      {/* Title */}
      <h3 className="text-xl font-semibold text-white leading-tight pt-1">
        {title}
      </h3>
    </CardHeader>

    <CardBody>
      {/* Description */}
      <p className="text-sm text-gray-200">{description}</p>
    </CardBody>
  </Card>
);

export const Stack = () => {
  return (
    <section className="py-10">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            My Tech Stack
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            A curated set of tools and technologies I use to build performant,
            maintainable, and scalable applications across the stack.
          </p>
        </div>

        {/* Grid of Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((item) => (
            <StackCard
              key={item?.id}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

