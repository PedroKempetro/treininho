"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { motion } from "framer-motion";

interface FutureSessionProps {
  year: string;
  companyName: string;
  futureMessage: string;
  nextSteps: string[];
}

export function FutureSession({
  year,
  companyName,
  futureMessage,
  nextSteps,
}: FutureSessionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-9xl mb-8"
      >
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        <TypewriterText text="O Futuro" speed={80} delay={800} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-2xl md:text-3xl text-orange-200 mb-12 max-w-4xl leading-relaxed"
      >
        <TypewriterText
          text={futureMessage}
          speed={40}
          delay={2300}
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold mb-6 text-orange-400">
          Próximos Passos
        </h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 8 + i * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-orange-500/30 to-orange-600/20 backdrop-blur-lg rounded-full px-6 py-3 border border-orange-400/40 text-lg font-semibold shadow-lg shadow-orange-500/20"
            >
              {step}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 11 }}
        className="text-xl text-gray-300 italic"
      >
        <TypewriterText
          text={`Gratidão, ${companyName}`}
          speed={50}
          delay={11200}
        />
      </motion.p>
    </div>
  );
}
