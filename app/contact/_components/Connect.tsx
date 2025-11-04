"use client";

import { Card, CardBody } from "@heroui/card";
import { Calendar2Plus, Messenger, Envelope } from "react-bootstrap-icons";

export const Connect = () => {
  const connectList = [
    {
      id: 1,
      image: <Envelope size={40} />,
      title: "Email Me",
      body: "Have a question or project? Send an email, and I'll reply promptly.",
    },
    {
      id: 2,
      image: <Messenger size={40} />,
      title: "Let's Chat",
      body: "Prefer to chat? Reach out on my social media platforms for a quick conversation.",
    },
    {
      id: 3,
      image: <Calendar2Plus size={40} />,
      title: "Book a Meeting",
      body: "Let's connect. Schedule a meeting to discuss your project in more detail.",
    },
  ];

  return (
    <section className="my-16">
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">Connect with Me</h2>
        <div className="flex gap-6 flex-col lg:flex-row">
          {connectList.map((item) => (
            <Card key={item?.id} className="w-full rounded-lg shadow-md p-6 hover:border-primary hover:border-2 cursor-pointer transition-all duration-200 ease-in-out">
              <CardBody className="flex justify-between items-center">
                {item?.image}
                <h3 className="text-xl font-semibold my-2">{item.title}</h3>
                <p className="text-sm text-gray-500 text-center">{item.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
