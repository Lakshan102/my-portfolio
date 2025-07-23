"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Other",
    path: "#club",
  },
];

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="mobile-nav fixed top-0 left-0 right-0 z-50 border-b border-[#33353F] bg-[#121212] bg-opacity-95">
      <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex-wrap items-center justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-2xl text-white font-semibold flex items-center"
        >
          <Image
            src="/images/portfolio_logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="touch-target flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 hover:border-white transition-all duration-300"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="touch-target flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 hover:border-white transition-all duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-0 md:flex-row md:space-x-6 lg:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {navBarOpen && (
        <div className="mobile-overlay md:hidden">
          <MenuOverlay links={navLink} />
        </div>
      )}
    </nav>
  );
};
