"use client";

import { Skill } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";
import { useState } from "react";

interface LearningsSessionProps {
  skills: Skill[];
}

export function LearningsSession({ skills }: LearningsSessionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const categories = [
    {
      title: "Soft Skills",
      description: "Habilidades interpessoais que desenvolvemos ao longo da jornada",
      skills: skills.filter(s => s.type === "soft").slice(0, 4),
      gradient: "linear-gradient(315deg, #ffbc00, #ff0058)"
    },
    {
      title: "Hard Skills",
      description: "Competências técnicas adquiridas através de projetos e desafios",
      skills: skills.filter(s => s.type === "hard").slice(0, 4),
      gradient: "linear-gradient(315deg, #03a9f4, #ff0058)"
    },
    {
      title: "Tecnologias",
      description: "Ferramentas e sistemas que dominamos durante o estágio",
      skills: skills.filter(s => s.type === "hard").slice(4, 8),
      gradient: "linear-gradient(315deg, #4dff03, #00d0ff)"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center text-gray-900"
      >
        <TypewriterText text="O que Aprendemos" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xl text-gray-600 mb-12 text-center max-w-2xl"
      >
        <TypewriterText
          text="Competências que desenvolvemos juntos"
          speed={50}
          delay={1800}
        />
      </motion.p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-7xl py-10">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
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
                background: category.gradient,
                transform: hoveredIndex === i ? "skewX(0deg)" : "skewX(15deg)",
                left: hoveredIndex === i ? "20px" : "50px",
                width: hoveredIndex === i ? "calc(100% - 90px)" : "50%",
              }}
            />

            {/* Blurred background (after) */}
            <motion.div
              className="absolute top-0 left-12 w-1/2 h-full rounded-lg transition-all duration-500"
              style={{
                background: category.gradient,
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
              className="relative py-5 px-10 bg-white/5 backdrop-blur-md shadow-lg rounded-lg z-[1] text-white transition-all duration-500"
              style={{
                left: hoveredIndex === i ? "-25px" : "0",
                padding: hoveredIndex === i ? "60px 40px" : "20px 40px",
              }}
            >
              <h2 className="text-4xl font-bold text-white mb-3">
                {category.title}
              </h2>
              <p className="text-base mb-3 leading-relaxed text-white/90">
                {category.description}
              </p>

              {/* Skills list */}
              <div className="space-y-2 mb-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 + i * 0.2 + idx * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-white/80">{skill.name}</span>
                    {skill.level && (
                      <span className="text-white font-semibold">{skill.level}%</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  background: "#ffcf4d",
                  scale: 1.05,
                }}
                className="inline-block text-base text-gray-900 bg-white py-2.5 px-4 rounded font-bold mt-2 transition-all hover:shadow-lg"
              >
                Ver Mais
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
