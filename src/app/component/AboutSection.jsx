"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaAws, FaLinkedin, FaCertificate, FaGraduationCap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSpringboot, SiTailwindcss, SiNextdotjs, SiFlutter, SiReact, SiPhp } from "react-icons/si";
import { MdSchool, MdVerifiedUser } from "react-icons/md";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex items-center gap-2"><SiPhp className="text-purple-400" /> PHP</li>
        <li className="flex items-center gap-2"><FaHtml5 className="text-orange-500" /> HTML</li>
        <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-400" /> CSS</li>
        <li className="flex items-center gap-2"><FaReact className="text-cyan-400" /> MERN Stack</li>
        <li className="flex items-center gap-2"><SiSpringboot className="text-green-500" /> Spring Boot</li>
        <li className="flex items-center gap-2"><SiTailwindcss className="text-teal-400" /> Tailwind</li>
        <li className="flex items-center gap-2"><SiNextdotjs className="text-white" /> Next.js</li>
        <li className="flex items-center gap-2"><FaReact className="text-cyan-400" /> React Native</li>
        <li className="flex items-center gap-2"><SiFlutter className="text-blue-500" /> Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center gap-2">
          <MdSchool className="text-blue-400" /> Undergraduate University of Colombo School of Computing
        </li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex items-center gap-2"><MdVerifiedUser className="text-green-400" /> ISC2 Certificates</li>
        <li className="flex items-center gap-2"><FaCertificate className="text-yellow-400" /> Simplilearn Certificates</li>
        <li className="flex items-center gap-2"><FaAws className="text-orange-400" /> AWS certificates</li>
        <li className="flex items-center gap-2"><FaLinkedin className="text-blue-500" /> Linkedin Certificates</li>
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
    <section className="text-white" id="about">
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
            expand my capabilities.I’ve worked on several personal and academic
            projects. I'm driven by a strong interest in building efficient,
            I have been a Linux user for three years, and I am interested in the
            DevOps field.user-friendly applications—whether it’s frontend interfaces
            or robust backend systems. My goal is to become a versatile developer 
            who can contribute meaningfully across the entire development lifecycle.
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
