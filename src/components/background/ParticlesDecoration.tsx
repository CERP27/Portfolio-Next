// components/Particles.tsx
"use client";
import { useParticles } from "@/hooks/useParticles";
import { motion } from "framer-motion";

export const Particles = ({ count = 20 }: { count?: number }) => {
  const particles = useParticles(count);

  return (
    <>
      {particles.map(({ id, top, left, size, delay }) => (
        <motion.div
          key={id}
          className="absolute bg-white rounded-full opacity-5"
          style={{
            top,
            left,
            width: `${size}px`,
            height: `${size}px`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};
