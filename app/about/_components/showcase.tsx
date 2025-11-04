"use client";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

export const Showcase = () => {
  return (
    <Card className="bg-content1/70 backdrop-blur-sm p-4">
      <CardBody className="">
        <article>
          <Avatar
            src="/images/man.png"
            className="float-right w-full md:w-[20rem] h-auto border-4 border-primary shadow-lg mb-4 ml-4 aspect-square"
            radius="md"
          />
          <div>
            <h4 className="font-bold text-2xl border-b-2 border-gray-500 pb-3 pr-3">
              About - Prolomon
            </h4>
            <p className="text-lg my-4">
              My name is Taiwo Oyetade Solomon, and my journey as a developer began with
              curiosity that grew into a lasting drive to build systems that
              make sense, work efficiently, and stand the test of time. From the
              beginning, I was drawn to how logic and creativity merge in
              programming, how structured thought becomes functional design. I
              quickly realized development isn&apos;t just about writing
              code—it&apos;s about solving problems and giving structure to
              ideas. That realization pushed me to master both frontend and
              backend development so I could understand and shape every layer of
              a system.
              <br />
              Over the years, I&apos;ve built applications that merge creativity
              with precision, always aiming to make them scalable, intuitive,
              and future-ready. My work spans across React, Next.js, Express,
              and MongoDB, tools I use to craft digital experiences that connect
              users seamlessly to technology. I approach every project like an
              evolving system—something that should adapt over time, not remain
              static. I see every piece of code as part of a living structure
              that should remain strong as the product grows.
              <br />
              My projects reflect this mindset. I&apos;ve developed platforms
              for ride booking, document processing, and image editing—all
              centered on usability and performance. I&apos;ve also explored AI
              integration to make software more intuitive and accessible,
              leading to ideas like Insight, a smart glass concept designed to
              help visually impaired individuals understand their surroundings
              through intelligent recognition. Each project deepened my belief
              that good technology should be both functional and human-centered.{" "}
              <br />
              Continuous learning defines my approach. I&apos;m expanding my
              expertise in C++, Python, and React Native, exploring new ways to
              combine logic, mathematics, and design. For me, progress means
              evolving with the industry, not chasing trends but mastering
              fundamentals that last. I view coding as more than a job—it&apos;s
              a way of thinking, a means to create systems that are clear,
              efficient, and purposeful.
              <br />
              Looking forward, I see myself building ecosystems that connect
              ideas, people, and data in smarter ways. Every project I take on
              is another step toward creating digital products that genuinely
              improve how people interact with technology. My commitment remains
              simple—build things that last, evolve, and make an impact.
            </p>
          </div>
        </article>
      </CardBody>
    </Card>
  );
};
