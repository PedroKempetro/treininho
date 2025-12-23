"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";
import { useState } from "react";
import { AlertCircle, Users, Lightbulb } from "lucide-react";

export function FirstDaySession() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const firstDayCards = [
    { icon: AlertCircle, text: "Nervosismo" },
    { icon: Users, text: "Novos Amigos" },
    { icon: Lightbulb, text: "Expectativas" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 font-['Poppins']">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-8 text-center text-gray-900 font-['Poppins']"
      >
        <TypewriterText text="O Primeiro Dia" speed={70} delay={800} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="text-2xl md:text-3xl text-orange-600 mb-12 max-w-3xl text-center font-['Poppins']"
      >
        <TypewriterText
          text="O dia em que tudo começou..."
          speed={50}
          delay={2800}
        />
      </motion.p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center items-center gap-12 max-w-7xl py-10">
        {firstDayCards.map((item, i) => {
          const gradients = [
            "linear-gradient(315deg, #ffbc00, #ff0058)",
            "linear-gradient(315deg, #03a9f4, #ff0058)",
            "linear-gradient(315deg, #4dff03, #00d0ff)"
          ];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 4.5 + i * 0.3, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-[320px] h-[360px] flex justify-center items-center my-10 mx-8 transition-all duration-500"
            >
              {/* Skewed background */}
              <motion.div
                className="absolute top-0 left-12 w-1/2 h-full rounded-lg transition-all duration-500"
                style={{
                  background: gradients[i],
                  transform: hoveredIndex === i ? "skewX(0deg)" : "skewX(15deg)",
                  left: hoveredIndex === i ? "20px" : "50px",
                  width: hoveredIndex === i ? "calc(100% - 90px)" : "50%",
                }}
              />

              {/* Blurred background */}
              <motion.div
                className="absolute top-0 left-12 w-1/2 h-full rounded-lg transition-all duration-500"
                style={{
                  background: gradients[i],
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
                className="relative py-8 px-10 bg-white/5 backdrop-blur-md shadow-lg rounded-lg z-[1] transition-all duration-500 font-['Poppins']"
                style={{
                  left: hoveredIndex === i ? "-25px" : "0",
                  padding: hoveredIndex === i ? "80px 40px" : "60px 40px",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4.7 + i * 0.3, type: "spring" }}
                >
                  <item.icon className="w-20 h-20 text-gray-900" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-4xl font-bold text-gray-900 text-center font-['Poppins']">
                  {item.text}
                </h3>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
