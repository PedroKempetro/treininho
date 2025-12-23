"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";
import Image from "next/image";

interface OpeningSessionProps {
  companyName: string;
  year: string;
}

export function OpeningSession({ companyName, year }: OpeningSessionProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center -mt-20">
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="relative mb-6 flex justify-center items-center"
        >
          {/* Logo */}
          <div className="relative w-75 h-75 md:w-100 md:h-100">
            <Image
              src="/kempetrologo2.png"
              alt="Kempetro Engenharia"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-4xl md:text-6xl text-orange-600 mb-4 font-light"
        >
          <TypewriterText
            text="Estagiário Wrapped"
            speed={60}
            delay={1700}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-xl md:text-2xl text-gray-600 mt-4 font-light"
        >
          <TypewriterText
            text="Uma retrospectiva de quem construiu junto"
            speed={40}
            delay={3200}
          />
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mt-12 text-gray-500 text-sm font-light"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Navegue para começar 👉
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
