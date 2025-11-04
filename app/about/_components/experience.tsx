"use client"

import { Card, CardBody, Link } from "@heroui/react";
import { Briefcase } from "react-bootstrap-icons";

const experiences = [
  {
    years: "2024 - Present",
    company: "Tr3g Innovative",
    title: "Fullstack Developer",
    link: "https://tr3-g.com.ng",
    details: [
      "Crafting comprehensive digital marketing strategies to boost online presence and drive conversions.",
      "Expertise in SEO, SEM, content marketing, and social media management to enhance brand visibility.",
    ],
  },
  {
    years: "2025",
    company: "K-Deck Professional Services",
    title: "Frontend Developer",
    link: "https://kdeckprofessionalservices.com.ng/",
    details: [
      "Delivered responsive websites using HTML, CSS, JavaScript.",
      "Collaborated with designers to translate UI/UX into production code.",
      "Improved client satisfaction by enhancing site performance and usability.",
    ],
  },
  {
    years: "2023 - 2024",
    company: "Devit Limited",
    title: "Fullstack Engineer",
    details: [
      "Designed backend services and frontend features for business apps.",
      "Improved client project delivery timelines through efficient coding practices.",
    ],
  },
  {
    years: "2022 - 2023",
    company: "DOKT Technologies",
    title: "Data Entry + Automation Developer",
    details: [
      "Managed large datasets with >98% accuracy.",
      "Built OCR tool to automate reporting, saving 20+ hours/month of manual work.",
    ],
  },
];

export function Experience() {
  return (
    <div className=" py-12 my-6 space-y-6">
      <h1 className="text-4xl font-bold mb-4">
        Crafting <span className="text-primary">User-Centered Experiences</span>
      </h1>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card
            key={exp?.years}
            className={`rounded-2xl shadow-sm border-none even:bg-primary`}
          >
            <CardBody className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6">
              <div className="text-sm font-medium w-32">{exp.years}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold even:text-white">
                  {exp?.link ? <Link href={exp?.link} className="text-white text-lg font-semibold" target="_blank">{exp.company}</Link> : exp.company}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Briefcase size={18} />
                  <span className="font-semibold">{exp.title}</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  {exp.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}