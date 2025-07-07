"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { animate, motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projectData = [
  {
    id: 1,
    title: "HTML PHP CSS JS Project",
    description:
      "Online Pharmacy Locator and Medicine Tracker, University Second year project",
    img: "images/ReMed.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/ReMed-ucsc",
    // previewUrl: "/",
    
  },
  {
    id: 2,
    title: "Spring Boot React Peoject",
    description:
      "Industrial project, Hotel Management System. spring boot backend ,react frontend. Microservice project",
    img: "images/Hotel.png",
    tag: ["All", "SpringBoot", "REACT"],
    gitUrl: "https://github.com/SyncSixSolutions",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "MERN Stack project",
    description: "Online Learning Platform",
    img: "images/lerningPlatform.jpg",
    tag: ["All", "MERN", "REACT"],
    gitUrl: "",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Next js Project",
    description: "My Portfolio",
    img: "images/portfolio.png",
    tag: ["All", "NEXT"],
    gitUrl: "https://github.com/Lakshan102/my-portfolio",
    // previewUrl: "/",
  },
    {
    id: 5,
    title: "MERN Stack Project",
    description: "FoodWagon Online Food Ordering App",
    img: "images/FoodWagon.jpeg",
    tag: ["All", "MERN", "REACT"],
    gitUrl: "https://github.com/Lakshan102/mern-stack-group-project",
    // previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handelTag = (newTag) => {
    setTag(newTag);
  };
  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTags
          onClick={handelTag}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handelTag}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTags
          onClick={handelTag}
          name="SpringBoot"
          isSelected={tag === "SpringBoot"}
        />
        <ProjectTags
          onClick={handelTag}
          name="REACT"
          isSelected={tag === "REACT"}
        />
        <ProjectTags
          onClick={handelTag}
          name="MERN"
          isSelected={tag === "MERN"}
        />
        <ProjectTags
          onClick={handelTag}
          name="NEXT"
          isSelected={tag === "NEXT"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3,delay:index*0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.img}
              // previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
