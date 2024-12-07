"use client"
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";
const AnimatedText = () => {
  return (
    <>
      <AnimatePresence mode="wait">
    <motion.h1
      initial={{ x: '-100%', opacity: 0, y:'-100%' }}
      animate={{ x: '5%', opacity: 1, y:'60%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        fontSize: '8rem',
        fontWeight: 'bold',
        color: '#fff',
        whiteSpace: 'nowrap',
      }}
    >
      My Medical.ai
    </motion.h1>
        <motion.div className='m-2'
          initial={{ x: '-100%', opacity: 0, y:'-100%' }}
          animate={{ x: '5%', opacity: 1, y:'45%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{

          }}
        >
        <img className='size-72' src='https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg' />
        </motion.div>
      </AnimatePresence></>
  );
};

export default AnimatedText;
