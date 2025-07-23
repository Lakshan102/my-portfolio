import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="mobile-menu-overlay bg-[#121212] border-t border-[#33353F]">
      <ul className="flex flex-col py-6 px-4 space-y-4">
        {links.map((link, index) => (
          <li key={index} className="text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
