'use client'

import Hero from "./components/Hero";
import Orb from "./components/Orb";
import Nod from "./components/Nod";
import OrbTabs from "./components/OrbTabs";
import LLM from "./components/llm";
import NodTabs from "./components/NodTabs";
import Suite from "./components/suite";
import DNA from "./components/dna";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Home() {
  return (
    <>
      <motion.main 
        className="max-w-[1920px] mx-auto px-6 py-4 grain-texture"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Orb />
        </motion.div>

        <motion.div variants={itemVariants}>
          <OrbTabs />
        </motion.div>

        <motion.div variants={itemVariants}>
          <LLM />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Nod />
        </motion.div>

        <motion.div variants={itemVariants}>
          <NodTabs />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Suite />
        </motion.div>

        <motion.div variants={itemVariants}>
          <DNA />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FAQ />
        </motion.div>
      </motion.main>
      
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Footer />
      </motion.div>
    </>
  );
}
