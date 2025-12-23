"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";
import Image from "next/image";
import { paposEstagiario } from "@/data/papos-estagiario";

export function PaposEstagiarioSession() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-12 overflow-y-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        <TypewriterText text="Papos de Estagiário" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-2xl text-orange-300 mb-12 text-center"
      >
        <TypewriterText
          text="Encontros que marcaram nossa jornada"
          speed={50}
          delay={1800}
        />
      </motion.p>

      {/* Polaroid Gallery */}
      <div className="relative max-w-7xl w-full min-h-[600px]">
        {paposEstagiario.map((papo, i) => {
          const positions = [
            { x: -20, y: 0, rotate: -8 },
            { x: 20, y: 40, rotate: 6 },
            { x: -15, y: 80, rotate: -5 },
            { x: 25, y: 120, rotate: 7 },
            { x: -10, y: 160, rotate: -6 },
            { x: 15, y: 200, rotate: 5 },
          ];

          const pos = positions[i % positions.length];

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                rotateZ: -180,
                y: -200,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateZ: pos.rotate,
                y: pos.y,
              }}
              transition={{
                delay: 3 + i * 0.3,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              whileHover={{
                scale: 1.15,
                rotateZ: 0,
                zIndex: 50,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="absolute"
              style={{
                left: `${10 + (i % 3) * 30}%`,
                top: `${Math.floor(i / 3) * 50}%`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Polaroid Frame */}
              <div className="relative bg-white p-4 pb-16 rounded-lg shadow-2xl cursor-pointer hover:shadow-orange-500/50 transition-all duration-300">
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-orange-200/40 backdrop-blur-sm rotate-2 rounded-sm shadow-md" />
                
                {/* Image Container */}
                <div className="relative w-64 h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={papo.image}
                    alt={papo.tema}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback se a imagem não existir
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  {/* Fallback overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-6xl opacity-30">
                    📸
                  </div>
                </div>

                {/* Polaroid Text */}
                <div className="mt-4 text-center">
                  <div className="text-gray-800 font-handwriting text-xl font-bold mb-1">
                    {papo.month}
                  </div>
                  <div className="text-gray-600 font-handwriting text-base">
                    {papo.tema}
                  </div>
                </div>

                {/* Pin/Thumbtack effect */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Shadow beneath polaroid */}
              <div
                className="absolute inset-0 bg-black/20 blur-xl"
                style={{
                  transform: "translateZ(-10px) translateY(20px)",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
