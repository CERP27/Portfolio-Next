"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

interface HeroSectionProps {
  name: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const HeroSection = ({ name = "Carlos Rojas" }: HeroSectionProps) => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.p
        className="text-sm sm:text-base text-slate-400 mb-2"
        variants={itemVariants}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl text-[#8b5cf6] sm:text-6xl lg:text-8xl font-bold mb-4"
        variants={itemVariants}
      >
        {name}
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-4xl text-[#d1c4e9] mb-4"
        variants={itemVariants}
      >
        Full Stack Developer
      </motion.h2>

      <motion.p
        className="max-w-xl text-sm text-slate-400 sm:text-base  mb-6"
        variants={itemVariants}
      >
        I build clean, performant web apps and explore emerging technologies in
        blockchain.
      </motion.p>

      <motion.span
        className="bg-white/10 border-2 border-text-[#d1c4e9] text-[#d1c4e9] px-6 py-2 mt-4 mb-10 rounded-full text-xs font-medium w-48 transition"
        variants={itemVariants}
      >
        Available
      </motion.span>

      <ArrowDownIcon classname="pt-32" />
    </motion.section>
  );
};
