"use client";

import { Area } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface AreasSessionProps {
  areas: Area[];
}

export function AreasSession({ areas }: AreasSessionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        <TypewriterText text="Áreas & Times" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xl text-gray-300 mb-12 text-center"
      >
        <TypewriterText
          text="Diversidade que nos fortalece"
          speed={50}
          delay={1800}
        />
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {areas.map((area, i) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              delay: 3 + i * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all cursor-pointer shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            style={{
              borderColor: area.id === "ti" ? "#f97316" : "rgba(249, 115, 22, 0.3)"
            }}
          >
            <div className="text-6xl mb-4">{area.icon}</div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: area.color }}
            >
              {area.name}
            </h3>
            <p className="text-gray-300 text-sm">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
