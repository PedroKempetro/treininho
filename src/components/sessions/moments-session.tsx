"use client";

import { Moment } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface MomentsSessionProps {
  moments: Moment[];
}

export function MomentsSession({ moments }: MomentsSessionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        <TypewriterText text="Momentos Marcantes" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-2xl text-orange-300 mb-12 text-center"
      >
        <TypewriterText
          text="Memórias que guardamos"
          speed={50}
          delay={1800}
        />
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {moments.map((moment, i) => (
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 50, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: 3 + i * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all overflow-hidden cursor-pointer shadow-lg shadow-orange-500/20"
          >
            {/* Placeholder for image */}
            <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl mb-4 flex items-center justify-center text-6xl">
              📸
            </div>

            <div className="text-sm text-gray-400 mb-2">{moment.date}</div>
            <p className="text-lg font-semibold text-white">
              {moment.description}
            </p>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
            >
              <p className="text-white text-sm">Ver mais ✨</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
