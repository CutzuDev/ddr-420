"use client";
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#0070f3",
          whiteSpace: "nowrap",
        }}
      >
        My Medical.ai
      </motion.div>
    </>
  );
};

export default AnimatedText;
