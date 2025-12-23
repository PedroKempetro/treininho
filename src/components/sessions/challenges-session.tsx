"use client";

import { Challenge } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";
import { useState } from "react";

interface ChallengesSessionProps {
  challenges: Challenge[];
}

export function ChallengesSession({ challenges }: ChallengesSessionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 font-['Poppins']">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center text-gray-900 font-['Poppins']"
      >
        <TypewriterText text="Desafios & Superações" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xl text-gray-600 mb-12 text-center max-w-2xl font-['Poppins']"
      >
        <TypewriterText
          text="Crescemos a cada obstáculo"
          speed={50}
          delay={1800}
        />
      </motion.p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-7xl py-10">
        {challenges.map((challenge, i) => {
          const gradients = [
            "linear-gradient(315deg, #ffbc00, #ff0058)",
            "linear-gradient(315deg, #03a9f4, #ff0058)",
            "linear-gradient(315deg, #4dff03, #00d0ff)",
            "linear-gradient(315deg, #ff6b6b, #feca57)",
            "linear-gradient(315deg, #a29bfe, #6c5ce7)"
          ];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.5 + i * 0.2, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-[320px] h-[400px] flex justify-center items-center my-10 mx-8 transition-all duration-500"
            >
              {/* Skewed background (before) */}
              <motion.div
                className="absolute top-0 left-12 w-1/2 h-full rounded-lg transition-all duration-500"
                style={{
                  background: gradients[i % gradients.length],
                  transform: hoveredIndex === i ? "skewX(0deg)" : "skewX(15deg)",
                  left: hoveredIndex === i ? "20px" : "50px",
                  width: hoveredIndex === i ? "calc(100% - 90px)" : "50%",
                }}
              />

              {/* Blurred background (after) */}
              <motion.div
                className="absolute top-0 left-12 w-1/2 h-full rounded-lg transition-all duration-500"
                style={{
                  background: gradients[i % gradients.length],
                  transform: hoveredIndex === i ? "skewX(0deg)" : "skewX(15deg)",
                  left: hoveredIndex === i ? "20px" : "50px",
                  width: hoveredIndex === i ? "calc(100% - 90px)" : "50%",
                  filter: "blur(30px)",
                }}
              />

              {/* Floating elements */}
              <span className="block absolute inset-0 z-[5] pointer-events-none">
                {/* Top left floating element */}
                <motion.div
                  className="absolute top-0 left-0 rounded-lg bg-white/10 backdrop-blur-md shadow-lg"
                  style={{
                    width: hoveredIndex === i ? "100px" : "0px",
                    height: hoveredIndex === i ? "100px" : "0px",
                    top: hoveredIndex === i ? "-50px" : "0",
                    left: hoveredIndex === i ? "50px" : "0",
                    opacity: hoveredIndex === i ? 1 : 0,
                  }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Bottom right floating element */}
                <motion.div
                  className="absolute bottom-0 right-0 rounded-lg bg-white/10 backdrop-blur-md shadow-lg"
                  style={{
                    width: hoveredIndex === i ? "100px" : "0px",
                    height: hoveredIndex === i ? "100px" : "0px",
                    bottom: hoveredIndex === i ? "-50px" : "0",
                    right: hoveredIndex === i ? "50px" : "0",
                    opacity: hoveredIndex === i ? 1 : 0,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </span>

              {/* Content */}
              <motion.div
                className="relative py-5 px-10 bg-white/5 backdrop-blur-md shadow-lg rounded-lg z-[1] transition-all duration-500 font-['Poppins']"
                style={{
                  left: hoveredIndex === i ? "-25px" : "0",
                  padding: hoveredIndex === i ? "60px 40px" : "20px 40px",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4 text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.7 + i * 0.2, type: "spring" }}
                >
                  {challenge.icon}
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center font-['Poppins']">
                  {challenge.title}
                </h2>

                {/* Before */}
                <div className="mb-4">
                  <div className="text-gray-700 text-sm font-semibold mb-2 font-['Poppins']">❌ Antes</div>
                  <p className="text-sm text-gray-900 leading-relaxed font-['Poppins']">
                    {challenge.before}
                  </p>
                </div>

                {/* After */}
                <div className="mb-4">
                  <div className="text-gray-700 text-sm font-semibold mb-2 font-['Poppins']">✅ Depois</div>
                  <p className="text-sm text-gray-900 leading-relaxed font-['Poppins']">
                    {challenge.after}
                  </p>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    background: "#ffcf4d",
                    scale: 1.05,
                  }}
                  className="inline-block text-sm text-gray-900 bg-white py-2 px-4 rounded font-bold mt-2 transition-all hover:shadow-lg w-full font-['Poppins']"
                >
                  Superado! 💪
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

