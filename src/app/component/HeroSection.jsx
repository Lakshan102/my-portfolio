"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';





const HeroSection = () => {
    // Function to handle CV download with analytics tracking
    const handleDownloadCV = () => {
        // You can add analytics tracking here if needed
        console.log('CV Download initiated');

        // Create a temporary link element for download
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Kavindu_Lakshan_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='lg:py-16'>
            <div className="grid grid-cols-1 lg:grid-cols-12">


                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <Image
                        src={"/images/hero.png"}
                        alt='Hero Image'
                        width={150}
                        height={150}
                    />
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-blue-500">
                            Hello , I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Kavindu Lakshan',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"

                                'Full Stack Developer',
                                1000,

                                'Mobile App Developer',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Now, I'm under graduate student in University of Colombo School of Computing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                        <button
                            className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-black hover:bg-slate-200 text-white transition-all duration-300"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Hire Me
                        </button>
                        {/* Option 1: Direct download link (recommended) */}
                        <a
                            href="/cv.pdf"
                            download="Kavindu_Lakshan_CV.pdf"
                            className="inline-block px-0.5 py-0.5 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-black hover:bg-slate-800 text-white transition-all duration-300"
                        >
                            <span className="flex items-center justify-center gap-2 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2.5 text-center transition-all duration-300">
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download CV
                            </span>
                        </a>

                        {/* Option 2: JavaScript function (uncomment to use instead)
                        <button 
                            onClick={handleDownloadCV}
                            className="px-0.5 py-0.5 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-black hover:bg-slate-800 text-white transition-all duration-300"
                        >
                            <span className="flex items-center justify-center gap-2 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2.5 text-center transition-all duration-300">
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download CV
                            </span>
                        </button>
                        */}
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden">

                        {/* 3D CSS Animation Scene */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center perspective-1000">
                            {/* Main 3D Rotating Sphere */}
                            <motion.div
                                className="relative w-48 h-48 lg:w-64 lg:h-64"
                                animate={{
                                    rotateY: [0, 360],
                                    rotateX: [0, 15, 0, -15, 0],
                                }}
                                transition={{
                                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                                    rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Core Sphere */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                                            "0 25px 50px -12px rgba(147, 51, 234, 0.7)",
                                            "0 25px 50px -12px rgba(236, 72, 153, 0.5)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Orbital Rings */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                                    animate={{ rotateZ: [0, 360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{ transform: "rotateX(75deg)" }}
                                />
                                <motion.div
                                    className="absolute inset-0 border-2 border-purple-400/40 rounded-full"
                                    animate={{ rotateZ: [360, 0] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    style={{ transform: "rotateY(75deg)" }}
                                />

                                {/* Floating Dots on Sphere */}
                                <motion.div
                                    className="absolute top-4 right-8 w-3 h-3 bg-white rounded-full shadow-lg"
                                    animate={{
                                        scale: [0.8, 1.2, 0.8],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-300 rounded-full shadow-lg"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.4, 0.9, 0.4]
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                />
                            </motion.div>
                        </div>

                        {/* Background Glowing Effects */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-500/15 to-pink-400/10"></div>

                        {/* Floating Particles Around */}
                        <motion.div
                            className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full shadow-lg"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                                y: [-15, 15, -15],
                                x: [-5, 5, -5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-lg"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.8, 0.3],
                                x: [-10, 10, -10],
                                y: [5, -5, 5]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                            animate={{
                                scale: [0.8, 1.4, 0.8],
                                opacity: [0.4, 0.9, 0.4],
                                rotate: [0, 360],
                                y: [-8, 8, -8]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.7
                            }}
                        />
                        <motion.div
                            className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full shadow-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6],
                                x: [8, -8, 8],
                                rotate: [0, -180, -360]
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        />
                    </div>
                </motion.div>
            </div>
            {/* To use Spline, use their official React component or dynamically load the web component in useEffect */}
            {/* Example using the official Spline React component: */}
            {/* 
            import Spline from '@splinetool/react-spline';
            <Spline scene="YOUR_SPLINE_SCENE_URL" />
            */}

        </section>
    )
};
export default HeroSection;