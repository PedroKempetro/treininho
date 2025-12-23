"use client";

import { Feedback } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface FeedbacksSessionProps {
  feedbacks: Feedback[];
}

export function FeedbacksSession({ feedbacks }: FeedbacksSessionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        <TypewriterText text="Feedbacks & Reconhecimento" speed={70} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-xl text-orange-300 mb-12 text-center"
      >
        <TypewriterText
          text="O que disseram sobre nós"
          speed={50}
          delay={2300}
        />
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {feedbacks.map((feedback, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: -90, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            transition={{
              delay: 4 + i * 0.3,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            className="relative bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/40 hover:border-orange-400/70 transition-all shadow-lg shadow-orange-500/20"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Quote icon */}
            <div className="text-6xl text-orange-400/30 mb-4">"</div>

            {/* Feedback text */}
            <p className="text-lg text-gray-100 mb-6 italic leading-relaxed">
              {feedback.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-orange-500/50">
                👤
              </div>
              <div>
                <div className="font-bold text-orange-300">{feedback.author}</div>
                <div className="text-sm text-gray-400">{feedback.role}</div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-400/30 to-transparent rounded-tr-2xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
