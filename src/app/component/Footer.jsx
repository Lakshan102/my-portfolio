import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-[#121212] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <span className="text-lg sm:text-xl font-semibold text-white">
            Kavindu Lakshan
          </span>
          <p className="text-slate-400 text-sm sm:text-base">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
