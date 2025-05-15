'use client'
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags'

const projectData =[
    {
        id:1,
        title:"HTML PHP CSS JS Project",
        description:"Online Pharmacy Locator and Medicine Tracker, University Second year project",
        img:"images/ReMed.png",
        tag:["All", "PHP"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Spring Boot React Peoject",
        description:"Industrial project, Hotel Management System. spring boot backend ,react frontend. Microservice project",
        img:"images/Hotel.png",
        tag:["All", "SpringBoot", "REACT"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"MERN Stack project",
        description:"Online Learning Platform",
        img:"images/lerningPlatform.jpg",
        tag:["All", "MERN"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Next js Project",
        description:"My Portfolio",
        img:"images/portfolio.png",
        tag:["All", "NEXT"],
        gitUrl:"/",
        previewUrl:"/"
    }
]

const ProjectSection=() =>{
    const [tag,setTag]=useState("All");

    const handelTag =(newTag)=>{
        setTag(newTag);
    };
    const filteredProject = projectData.filter((project)=>
        project.tag.includes(tag)
    );
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4">My Project</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTags onClick={handelTag} name="All" isSelected={tag === "All"} />
        <ProjectTags onClick={handelTag} name="PHP" isSelected={tag === "PHP"} />
        <ProjectTags onClick={handelTag} name="SpringBoot" isSelected={tag === "SpringBoot"} />
        <ProjectTags onClick={handelTag} name="REACT" isSelected={tag === "REACT"} />
        <ProjectTags onClick={handelTag} name="MERN" isSelected={tag === "MERN"} />
        <ProjectTags onClick={handelTag} name="NEXT" isSelected={tag === "NEXT"} />
    </div>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.img} previewUrl={project.previewUrl} gitUrl={project. gitUrl}/>)}
    </div>
    </>
  )
}

export default ProjectSection