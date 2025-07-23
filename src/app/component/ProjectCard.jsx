import React from "react";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";    

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="h-48 sm:h-52 lg:h-64 relative group overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:filter group-hover:blur-[2px] group-hover:brightness-75"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize:"cover",
          }}
        />
        
        {/* Overlay layer */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex">
            <Link 
              href={gitUrl} 
              className="touch-target h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 hover:scale-110"
            >
              <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors duration-300" />
            </Link>
        </div>
      </div>
      
      <div className="text-white p-4 sm:p-6">
        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm sm:text-base leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
