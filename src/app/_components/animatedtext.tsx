"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { Button } from "~/components/ui/button";
const AnimatedText = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className=" text-center flex gap-10 min-h-screen w-full flex-col items-center justify-center bg-color2/25">
        <motion.h1
          key={uuidv4()}
          initial={{ opacity: 0, y: "-150px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
          className="text-4xl font-bold sm:text-6xl md:text-8xl"
        >
          Your Health, Our Priority
        </motion.h1>
        <motion.p
          key={uuidv4()}
          initial={{ opacity: 0, y: "-150px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-xl"
        >
          Experience top-quality healthcare with compassionate professionals
          dedicated to your well-being.
        </motion.p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-color1 !important">Enroll Now</Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;
