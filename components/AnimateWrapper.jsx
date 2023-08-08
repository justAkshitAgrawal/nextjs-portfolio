"use client";

import { motion } from "framer-motion";

const AnimateWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.main>
  );
};

export default AnimateWrapper;
