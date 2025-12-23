"use client";

import { Stat } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface StatsSessionProps {
  stats: Stat[];
}

export function StatsSession({ stats }: StatsSessionProps) {
  const rotations = [-4, 3, -1, -5, -2, 2];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center text-gray-900"
      >
        <TypewriterText text="Números do Estágio" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-2xl text-orange-600 mb-12 text-center"
      >
        <TypewriterText
          text="Saiba nossas melhores conquistas!"
          speed={50}
          delay={1800}
        />
      </motion.p>

      {/* Stats Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center items-center max-w-7xl group">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ 
              opacity: 0.69, 
              scale: 0.85, 
              rotateX: 0,
              rotateZ: rotations[i] || 0
            }}
            transition={{
              delay: 2.5 + i * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              opacity: 1,
              scale: 1,
              rotateZ: 0,
              filter: "grayscale(0%) sepia(0%)",
              mixBlendMode: "normal",
              transition: { duration: 0.3 }
            }}
            className="relative w-[280px] h-[420px] rounded-xl p-8 text-center cursor-pointer
                       border-[6px] border-transparent hover:border-orange-400
                       shadow-[0_0_24px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_100px_0_rgba(251,146,60,0.6)]
                       outline outline-[6px] outline-white outline-offset-[6px] hover:outline-offset-[3px]
                       transition-all duration-300
                       overflow-hidden
                       group-hover:opacity-40 hover:!opacity-100"
            style={{
              filter: "grayscale(100%) sepia(5%)",
              mixBlendMode: "multiply",
              background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
              backdropFilter: "blur(10px)"
            }}
          >
            {/* Background gradient overlay */}
            <div 
              className="absolute inset-0 opacity-10 hover:opacity-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${stat.color}, transparent)`
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
              <motion.div 
                className="text-8xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.7 + i * 0.15, type: "spring" }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                className="text-6xl font-bold"
                style={{ color: stat.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + i * 0.15 }}
              >
                {stat.value}
              </motion.div>
              
              <div className="text-xl font-medium text-gray-700">
                {stat.label}
              </div>

              {/* Decorative elements */}
              <div 
                className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                style={{ background: stat.color }}
              />
              <div 
                className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-40"
                style={{ background: stat.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
