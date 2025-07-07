import React from "react";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";    

const ClubCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div>
      <div className="h-52 md:h-79 rounded-t-xl relative group overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 rounded-t-xl transition-all duration-500 group-hover:filter group-hover:blur-[2px] group-hover:brightness-75"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize:"cover",
          }}
        />
        
        {/* Overlay layer */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex">
            <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ClubCard;
