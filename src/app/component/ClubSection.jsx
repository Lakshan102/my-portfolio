"use client";
import React, { useState, useRef } from "react";
import ClubCard from "./ClubCard";
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "MadHack Competition",
        description:
            "MadHack 3.0 - IEEE UCSC Hackathon. I'm the Logistic team member of this event.",
        img: "images/MadHack.png",
        previewUrl: "https://www.linkedin.com/posts/kavindu-lakshan-b29091287_ieee-madhack-ucsc-activity-7220057762137849857-Ib4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWZ1hEBhiiUkvbZ5nYXUVJCWYgobYOVjGE",
    },
    {
        id: 2,
        title: "ReidXtreme Competition",
        description:
            "ReidXtreme 3.0 - IEEE Student Branch of UCSC and UCSC ACM Student Chapter. I'm the Logistic team member of this event.",
        img: "images/RaidXtreme.png",
        previewUrl: "https://www.linkedin.com/posts/kavindu-lakshan-b29091287_reidxtreme-ucsc-logisticsteam-activity-7252228510319009792-sfE2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWZ1hEBhiiUkvbZ5nYXUVJCWYgobYOVjGE",
    },
        {
        id: 3,
        title: "IntelliHack Competition",
        description:
            "IntelliHack 5.0 - IEEE UCSC Hackathon. I'm the Program and Logistics Lead of this event.",
        img: "images/IntelliHack.png",
        previewUrl: "https://www.linkedin.com/posts/kavindu-lakshan-b29091287_intellihack5-hackathon-logisticslead-activity-7347381638550405120-DLRE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWZ1hEBhiiUkvbZ5nYXUVJCWYgobYOVjGE",
    },
];

const ClubSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariant = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="club">
            <h2 className="text-center text-4xl font-bold text-white mt-10">
                My Club Activities
            </h2>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
                {projectData.map((card, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariant}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <ClubCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imgUrl={card.img}
                            previewUrl={card.previewUrl}
                            gitUrl={card.gitUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};


export default ClubSection;
