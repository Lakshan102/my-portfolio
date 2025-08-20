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
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ReMed-ucsc",
    // previewUrl: "/",

  },
  {
    id: 2,
    title: "LittleSteps",
    description:
      "DayCare Management System",
    img: "images/LittleSteps.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/LittleSteps2025/",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "LinkTalk",
    description: "Real Time Chat Application",
    img: "images/LinkTalk.png",
    tag: ["All" , "Mobile"],
    gitUrl: "https://github.com/PramodiPeshila/real_time_chat_app",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Next js Project",
    description: "My Portfolio",
    img: "images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lakshan102/my-portfolio",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "MERN Stack Project",
    description: "FoodWagon Online Food Ordering App",
    img: "images/FoodWagon.jpeg",
    tag: ["All", "Web"],
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
    <section id="project" className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8">
          My Projects
        </h2>

        {/* Project filter tags with mobile-friendly layout */}
        <div className="text-white flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 py-4 sm:py-6 mb-6 sm:mb-8">
          <ProjectTags
            onClick={handelTag}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTags
            onClick={handelTag}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTags
            onClick={handelTag}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          
        </div>

        {/* Project grid with responsive layout */}
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {filteredProject.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariant}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.img}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
