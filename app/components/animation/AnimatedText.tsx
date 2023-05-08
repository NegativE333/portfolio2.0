'use client';

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps{
    text: string;
    fontSize: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    fontSize
}) => {

    const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

    return(
        <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: `${fontSize}` }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "5px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
}

export default AnimatedText;