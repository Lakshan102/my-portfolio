import React from "react";
import { motion } from "framer-motion";


const variant = {
  default: { width: 0 },
  active: { width: "calc( 100% - 0.75rem " },
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="touch-target w-full sm:w-auto">
      <p className={`mr-3 font-semibold hover:text-white text-sm sm:text-base transition-colors duration-300 ${buttonClass}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variant}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
