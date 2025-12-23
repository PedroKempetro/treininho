"use client";

import { Intern } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface WhoAreInternsSessionProps {
  interns: Intern[];
  totalInterns: number;
  totalAreas: number;
  totalHours: number;
}

export function WhoAreInternsSession({
  interns,
  totalInterns,
  totalAreas,
  totalHours,
}: WhoAreInternsSessionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-12 text-center"
      >
        <span className="inline-flex items-center gap-2">
          <span className="relative inline-block">
            <span className="absolute inset-0 text-orange-500 blur-xl opacity-70 animate-pulse">Kem</span>
            <span className="relative text-orange-500" style={{
              textShadow: '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
              animation: 'glitch 3s infinite'
            }}>Kem</span>
          </span>
          <TypewriterText text=" são os Estagiários?" speed={60} delay={500} />
        </span>
      </motion.h2>
      
      <style jsx>{`
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            text-shadow: 0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316;
          }
          20% {
            transform: translate(-2px, 2px);
            text-shadow: 0 0 10px #f97316, 2px 0 20px #ff0058, 0 0 30px #f97316;
          }
          40% {
            transform: translate(-2px, -2px);
            text-shadow: 2px 0 10px #03a9f4, 0 0 20px #f97316, -2px 0 30px #ff0058;
          }
          60% {
            transform: translate(2px, 2px);
            text-shadow: 0 0 10px #f97316, -2px 0 20px #03a9f4, 0 0 30px #f97316;
          }
          80% {
            transform: translate(2px, -2px);
            text-shadow: 0 0 10px #ff0058, 0 0 20px #f97316, 2px 0 30px #03a9f4;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 shadow-lg shadow-orange-500/20 text-center"
        >
          <motion.div
            className="text-6xl font-bold text-orange-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <TypewriterText text={`+${totalInterns}`} speed={100} delay={2500} />
          </motion.div>
          <div className="text-xl text-gray-900">Estagiários</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, type: "spring" }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 shadow-lg shadow-orange-500/20 text-center"
        >
          <motion.div
            className="text-6xl font-bold text-orange-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <TypewriterText text={`+${totalAreas}`} speed={100} delay={2800} />
          </motion.div>
          <div className="text-xl text-gray-900">Áreas Diferentes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, type: "spring" }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 shadow-lg shadow-orange-500/20 text-center"
        >
          <motion.div
            className="text-6xl font-bold text-orange-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1 }}
          >
            <TypewriterText text={`+${totalHours.toLocaleString()}`} speed={50} delay={3100} />
          </motion.div>
          <div className="text-xl text-gray-900">Horas de Aprendizado</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mt-8"
      >
        {interns.slice(0, 15).map((intern, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5 + i * 0.1 }}
            className="bg-white/5 backdrop-blur rounded-xl p-4 border border-orange-500/20 hover:border-orange-400/50 transition-all"
          >
            <div className="text-4xl mb-2">👤</div>
            <div className="text-xs font-semibold">{intern.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
