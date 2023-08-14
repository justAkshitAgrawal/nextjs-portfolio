"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import React, { useState } from "react";

const AnimateWrapper = ({ children, hovered }) => {
  const { x, y } = useMousePosition();
  // use scroll position
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <motion.div
        // take scroll int account
        animate={{
          x: `${x - 40 + scrollX}px`,
          y: `${y - 30 + scrollY}px`,
          padding: `1rem`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className="absolute max-md:hidden rounded-full bg-[#ec4e39] blur-md"
      ></motion.div>
      {children}
    </motion.main>
  );
};

export default AnimateWrapper;
