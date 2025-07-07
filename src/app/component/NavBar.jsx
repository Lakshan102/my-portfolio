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
    <nav className="fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 pt-5">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold "
        >
          <Image
            src="/images/portfolio_logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex  items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex  items-center px-3 py-2 border rounded border-slate-200 hover:text-white text-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink  href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLink}/>: null}
    </nav>
  );
};
