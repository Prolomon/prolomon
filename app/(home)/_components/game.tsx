"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowRight } from "react-bootstrap-icons";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
];

export const Game: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Portfolio / tech initiative */}
        <div className="flex flex-col gap-6 items-start">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech News
          </h1>
          <p className="text-lg text-muted-foreground">
            A portfolio and tech initiative focused on building useful digital
            experiences. We highlight perspectives and breakthroughs from the
            Global South—amplifying stories, tools, and communities that matter.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              • Built with {techStack.slice(0, 3).join(", ")} and scalable
              services.
            </li>
            <li>• Focus on accessibility, performance, and delightful UX.</li>
            <li>• Open to collaborations and community feedback.</li>
          </ul>

          <div className="flex gap-3 mt-2">
            <Button
              as={Link}
              href="https://app.daily.dev/prolomon"
              target="_blank"
              color="primary"
              endContent={<ArrowRight size={18} />}
            >
              Daily Tech News
            </Button>
            <Button
              as={Link}
              href="https://medium.com/@prolomon"
              target="_blank"
              variant="bordered"
              endContent={<Newspaper size={18} />}
            >
              Read the Blog
            </Button>
          </div>
        </div>

        {/* Right: Visual card with teaser + external curated source */}
        <Card className="relative overflow-hidden bg-content1/70 backdrop-blur-sm border">
          <CardBody className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/showcase.jpg"
                alt="Portfolio concept"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-semibold">
                Tech from the Global South
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Curation of impactful engineering and startup stories across
                Africa, LATAM, and South Asia. Discover tools, datasets, and
                projects making a difference.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  as={Link}
                  href="https://news.ycombinator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  Explore Daily Feed
                </Button>
                <Button
                  as={Link}
                  href="https://www.techcabal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="light"
                >
                  Africa Tech News
                </Button>
                <Button
                  as={Link}
                  href="https://www.reddit.com/r/technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="light"
                >
                  Global Tech Threads
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
