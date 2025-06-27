"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatedMenuIcon } from "../icons/icons";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = () =>
    links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm font-medium hover:underline"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    ));
  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50 w-full"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-black">
            {"<"}CRDev{">"}
          </h1>

          <div className="hidden md:flex gap-6">{renderLinks()}</div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-black"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatedMenuIcon isOpen={isOpen} />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className=" md:hidden animate-[fade-in-down_0.3s_ease-in-out] absolute w-full right-0 z-50"
            >
              <div className="bg-white flex flex-col gap-4 p-4 items-center  shadow-md rounded-b-2xl">
                {renderLinks()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
