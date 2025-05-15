"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MERN Stack</li>
        <li>Spring Boot</li>
        <li>Tailwind</li>
        <li>Next js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Undergraduate University of Colombo School of Computing</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>ISC2 Certificates</li>
        <li>Simplilearn Certificates</li>
        <li>AWS certificates</li>
        <li>Linkedin Certificates</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isOpen, startTransaction] = useTransition();

  const handleTabChange = (id) => {
    startTransaction(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          className="mt-10 "
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full "> 
          <h2 className="text-4xl font-bold text-white  mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a passionate and motivated software engineering student at the
            University of Colombo School of Computing, aspiring to become a
            skilled full-stack software developer. I enjoy turning ideas into
            real-world solutions and continuously learning new technologies to
            expand my capabilities. With hands-on experience in the MERN stack,
            Spring Boot, Next.js, Tailwind CSS, HTML/CSS, PHP, and SQL, I’ve
            worked on several personal and academic projects, as well as two
            industrial-level projects that enhanced my understanding of
            real-world software development practices. I'm driven by a strong
            interest in building efficient, user-friendly applications—whether
            it’s frontend interfaces or robust backend systems. My goal is to
            become a versatile developer who can contribute meaningfully across
            the entire development lifecycle.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab == "certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
