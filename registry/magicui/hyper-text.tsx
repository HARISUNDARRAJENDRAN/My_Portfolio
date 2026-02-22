"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface HyperTextProps {
  children: string;
  className?: string;
}

export function HyperText({ children, className }: HyperTextProps) {
  const characters = children.split("");

  return (
    <motion.span
      aria-label={children}
      initial="initial"
      whileHover="hover"
      className={cn("inline-block", className)}
      variants={{
        initial: {},
        hover: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          className="inline-block"
          variants={{
            initial: {
              y: 0,
              opacity: 1,
            },
            hover: {
              y: -4,
              opacity: 0.9,
              transition: {
                type: "spring",
                stiffness: 450,
                damping: 22,
                mass: 0.5,
              },
            },
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.span>
  );
}
