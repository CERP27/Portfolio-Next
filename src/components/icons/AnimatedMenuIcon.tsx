import { motion } from "framer-motion";

export const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        animate={
          isOpen
            ? { x1: 6, y1: 6, x2: 18, y2: 18 }
            : { x1: 4, y1: 6, x2: 20, y2: 6 }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        animate={
          isOpen
            ? { x1: 6, y1: 18, x2: 18, y2: 6 }
            : { x1: 4, y1: 18, x2: 20, y2: 18 }
        }
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};
