'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="max-w-[1920px] mx-auto px-6 pt-8 pb-4 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link href="/">
          <Image
            src="/images/neural-arc.svg"
            alt="NeuralArc Logo"
            width={100}
            height={100}
            priority
            className="object-contain w-20 h-10"
          />
        </Link>
      </motion.div>

      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full px-8 py-5 bg-[#C1BBB4] shadow-[0_4px_0_0_#6B5B4D] hover:shadow-[0_2px_0_0_#6B5B4D] hover:bg-[#C1BBB4]"
          >
            <div className="flex flex-col gap-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="rounded-full px-8 py-5 bg-[#2F2C28] text-white shadow-[0_4px_0_0_#C6AEA3] hover:shadow-[0_2px_0_0_#C6AEA3] hover:bg-[#2F2C28]"
          >
            Sign in
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
} 