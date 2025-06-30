"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AnimatedMenuIcon, LogoIcon } from "../icons/icons";
import { AnimatePresence, motion, useInView } from "framer-motion";

export const Navbar = () => {
  const links = [
    { label: "Home", href: "#welcome" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const ref = useRef(null);
  const isNavInView = useInView(ref);
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

  useEffect(() => {
    setIsOpen(false);
  }, [isNavInView]);

  return (
    <nav
      ref={ref}
      className={`bg-[#0e0b1d]/75 ${
        !isOpen && "shadow-md"
      } sticky top-0 z-50 w-full`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <LogoIcon fill="#d1c4e9" className="h-24 w-24" />

          <div className="hidden md:flex text-[#d1c4e9] gap-6">
            {renderLinks()}
          </div>

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=" md:hidden animate-[fade-in-down_0.3s_ease-in-out] text-[#d1c4e9] absolute w-full right-0 z-50"
            >
              <div className="bg-[#0e0b1d]/75 flex flex-col gap-4 p-4 items-center  shadow-md rounded-b-2xl">
                {renderLinks()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
