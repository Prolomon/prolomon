"use client";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardHeader, Link } from "@heroui/react";
import { Briefcase, BoxArrowUpRight } from "react-bootstrap-icons";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

const techStack = [
    {
        id: 1,
        icon: "/images/html.png",
        title: "HTML",
        description:
            "Markup",
    },
    {
        id: 2,
        icon: "/images/css.png",
        title: "CSS",
        description:
            "Styling and layout",
    },
    {
        id: 3,
        icon: "/images/tailwind.png",
        title: "Tailwind CSS",
        description:
            "CSS framework.",
    },
    {
        id: 4,
        icon: "/images/javascript.png",
        title: "JavaScript",
        description:
            "interactivity",
    },
    {
        id: 5,
        icon: "/images/typescript.png",
        title: "TypeScript",
        description:
            "Developer experience",
    },
    {
        id: 6,
        icon: "/images/react.png",
        title: "React",
        description:
            "Framework",
    },
    {
        id: 7,
        icon: "/images/nodejs.png",
        title: "Node.js",
        description:
            "Framework",
    },
    {
        id: 8,
        icon: "/images/mongo.png",
        title: "Mongo DB",
        description:
            "NoSQL database",
    },
    {
        id: 9,
        icon: "/images/postgres.png",
        title: "Postgres SQL",
        description:
            "relational database.",
    },
    {
        id: 10,
        icon: "/images/expo.jpg",
        title: "React Native",
        description:
            "Framework",
    },
    {
        id: 11,
        icon: "/images/git.png",
        title: "Git & Version Control",
        description:
            "Tools",
    },
];


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
    <Card className="p-4 duration-300 border bg-black/90 border-gray-800 rounded-lg hover:border-primary hover:shadow-primary/20 cursor-pointer backdrop-blur-md transition-all ease-in-out shadow-lg">
        <CardHeader className="flex-col items-center gap-3">
            <Image src={icon} width={50} height={50} className="mx-auto" alt={title} />

            {/* Title */}
            <h3 className={`text-xl font-semibold text-white leading-tight text-center`}>
                {title}
            </h3>
        </CardHeader>

        <CardBody>
            {/* Description */}
            <p className="text-sm text-gray-300 capitalize text-center -mt-4">{description}</p>
        </CardBody>
    </Card>
);

export function About() {
    return (
        <section className="bg-black w-full py-10" id="about">
            <div className="mx-auto w-11/12 ">
                <motion.div
                    className="relative flex flex-col items-center justify-center text-center py-16 mb-8 bg-gradient-to-b from-black via-gray-900 to-black rounded-2xl shadow-lg border border-gray-800"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
                        Welcome to My Professional Journey
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-2">
                        I am dedicated to transforming ideas into impactful digital solutions, blending creativity with technical expertise to deliver exceptional user experiences. Explore my background, experience, and the technologies that drive my passion for innovation.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* my journey */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Card radius="lg" className="bg-black/80 p-6 mb-12 border border-gray-800 shadow-xl">
                            <CardBody className="">
                                <article>
                                    <Avatar
                                        src="/images/prolomon.png"
                                        className="w-3/4 md:w-[20rem] h-auto border-4 border-primary shadow-lg mb-4 ml-4 aspect-square mx-auto"
                                        radius="md"
                                    />
                                    <div>
                                        <h4 className="font-bold text-2xl border-b-2 border-gray-700 pb-3 pr-3 text-white">
                                            My Journey
                                        </h4>
                                        <motion.p
                                            className="text-lg my-4 text-gray-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                        >
                                            My journey began with a curiosity for how logic and creativity intersect in programming, which quickly grew into a drive to master both frontend and backend development. I believe that great software is not just about writing code, but about solving real problems and creating meaningful user experiences.
                                        </motion.p>
                                        <motion.p
                                            className="text-lg my-4 text-gray-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.4 }}
                                        >
                                            Over the years, I have developed a range of applications using React, Next.js, Express, Postgres and MongoDB, always focusing on usability, performance, and adaptability. These experiences have deepened my commitment to building technology that is both functional and human-centered.
                                        </motion.p>
                                        <motion.p
                                            className="text-lg my-4 text-gray-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.6 }}
                                        >
                                            I am committed to continuous learning, currently expanding my expertise in C++, Python, and React Native. I see every project as an opportunity to grow, adapt, and contribute to a smarter, more connected world. My goal is simple: to create digital products that last, evolve, and make a positive difference in how people interact with technology.
                                        </motion.p>
                                    </div>
                                </article>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* coding experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <Card radius="lg" className="bg-black/80 p-6 mb-12 border border-gray-800 shadow-xl">
                            <h1 className="text-2xl font-bold mb-4 text-white py-4">
                                Crafting User-Centered Experiences
                            </h1>

                            <div className="space-y-4">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp?.years}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                                        className=""
                                    >
                                        <Card
                                            className={`rounded-2xl shadow-lg border border-gray-800 ${index % 2 === 0 ? 'bg-black/90' : 'bg-primary/90'}`}
                                        >
                                            <CardBody className=" gap-3 p-6">
                                                <h3 className="text-lg font-semibold text-white inline-flex items-center gap-2">
                                                    {exp?.link ? <Link href={exp?.link} className={`text-white text-lg font-semibold`} target="_blank">{exp.company}</Link> : exp.company} <span className={`text-base text-white`}>({exp.years})</span>
                                                    {exp?.link && <BoxArrowUpRight size={16} color={index % 2 === 0 ? "#fff" : "#fff"} />}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={18} color={index % 2 === 0 ? "#fff" : "#fff"} />
                                                    <span className={`text-gray-200 font-semibold`}>{exp.title}</span>
                                                </div>
                                                <ul className="list-none list-image-none space-y-1 text-sm">
                                                    {exp.details.map((detail) => (
                                                        <li key={detail} className={`text-gray-200`}>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <Card radius="lg" className="bg-black/80 p-6 mb-12 border border-gray-800 shadow-xl">
                        <div className="w-full mx-auto">
                            {/* Header Section */}
                            <div className="text-left mb-10">
                                <h1 className="text-xl font-bold text-white tracking-tight mb-4">
                                    My Tech Stack
                                </h1>
                                <p className="text-base text-gray-200 mt-4">
                                    A curated set of tools and technologies I use to build performant,
                                    maintainable, and scalable applications across the stack.
                                </p>
                            </div>

                            {/* Grid of Tech Stack Cards */}
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {techStack.map((item, idx) => (
                                    <motion.div
                                        key={item?.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.07 }}
                                    >
                                        <StackCard
                                            icon={item?.icon}
                                            title={item?.title}
                                            description={item?.description}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
