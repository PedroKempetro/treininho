"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kempetroWrappedData } from "@/data/kempetro-wrapped-data";
import { SessionType } from "@/types/kempetro-wrapped";

// Import all sessions
import { OpeningSession } from "./sessions/opening-session";
import { WhoAreInternsSession } from "./sessions/who-are-interns-session";
import { FirstDaySession } from "./sessions/first-day-session";
import { ProjectsSession } from "./sessions/projects-session";
import { StatsSession } from "./sessions/stats-session";
import { LearningsSession } from "./sessions/learnings-session";
import { PaposEstagiarioSession } from "./sessions/papos-estagiario-session";
import { ChallengesSession } from "./sessions/challenges-session";
import { FutureSession } from "./sessions/future-session";
import { CreditsSession } from "./sessions/credits-session";
import { Snowfall } from "./snowfall";
import { GearBelt } from "./gear-belt";
import { AudioPlayer } from "./audio-player";

const sessions: SessionType[] = [
  "opening",
  "who-are-interns",
  "first-day",
  "projects",
  "stats",
  "learnings",
  "papos-estagiario",
  "challenges",
  "future",
  "credits",
];

export function KempetroWrappedMain() {
  const [currentSession, setCurrentSession] = useState(0);
  const [direction, setDirection] = useState(0);
  const [techMode, setTechMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const data = kempetroWrappedData;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSession = useCallback(() => {
    if (currentSession < sessions.length - 1) {
      setDirection(1);
      setCurrentSession((prev) => prev + 1);
    }
  }, [currentSession]);

  const prevSession = useCallback(() => {
    if (currentSession > 0) {
      setDirection(-1);
      setCurrentSession((prev) => prev - 1);
    }
  }, [currentSession]);

  const goToSession = useCallback((index: number) => {
    setDirection(index > currentSession ? 1 : -1);
    setCurrentSession(index);
  }, [currentSession]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSession();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSession();
      } else if (e.key === "t" && e.ctrlKey) {
        e.preventDefault();
        setTechMode((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSession, prevSession]);

  const getBackgroundColor = () => {
    const colors = [
      "from-black via-orange-950 to-black", 
      "from-orange-950 via-black to-orange-900", 
      "from-black via-orange-900 to-black", 
      "from-orange-900 via-black to-orange-950", 
      "from-black via-orange-950 to-orange-900", 
      "from-orange-950 via-orange-900 to-black", 
      "from-black via-orangzinc-900 to-black", 
      "from-orange-900 via-e-900 to-black", 
      "from-orange-900 via-black to-orange-950", 
      "from-orange-950 via-black to-orange-900", 
      "from-black via-orange-950 to-black", 
      "from-orange-900 via-black to-orange-950", 
      "from-black via-zinc-950 to-black",
    ];
    return colors[currentSession];
  };

  const renderSession = () => {
    const sessionType = sessions[currentSession];

    switch (sessionType) {
      case "opening":
        return <OpeningSession companyName={data.companyName} year={data.year} />;
      case "who-are-interns":
        return (
          <WhoAreInternsSession
            interns={data.interns}
            totalInterns={data.totalInterns}
            totalAreas={data.totalAreas}
            totalHours={data.totalHours}
          />
        );
      case "first-day":
        return <FirstDaySession />;
      case "projects":
        return <ProjectsSession projects={data.projects} />;
      case "stats":
        return <StatsSession stats={data.stats} />;
      case "learnings":
        return <LearningsSession skills={data.skills} />;
      case "papos-estagiario":
        return <PaposEstagiarioSession />;
      case "challenges":
        return <ChallengesSession challenges={data.challenges} />;
      case "future":
        return (
          <FutureSession
            year={data.year}
            companyName={data.companyName}
            futureMessage={data.futureMessage}
            nextSteps={data.nextSteps}
          />
        );
      case "credits":
        return (
          <CreditsSession
            interns={data.interns}
            companyName={data.companyName}
            year={data.year}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 relative overflow-hidden transition-all duration-1000 md:pr-30`}
    >
      {/* Animated background particles (reduzido para melhor performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={`${currentSession}-${i}`}
            className="absolute w-2 h-2 bg-orange-400/40 rounded-full shadow-lg shadow-orange-400/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [
                null,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-30 min-h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSession}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {renderSession()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-160 z-20 flex items-center gap-4 px-4">
        <button
          onClick={prevSession}
          disabled={currentSession === 0}
          className="px-6 py-3 bg-gray-900/90 backdrop-blur-lg rounded-full border border-gray-800 hover:bg-gray-800 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-lg"
        >
          ← Anterior
        </button>

        <div className="flex gap-2">
          {sessions.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSession(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentSession
                  ? "bg-orange-500 w-8 h-3 shadow-md"
                  : "bg-gray-300 hover:bg-orange-300 w-3 h-3"
              }`}
              title={`Sessão ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSession}
          disabled={currentSession === sessions.length - 1}
          className="px-6 py-3 bg-gray-900/90 backdrop-blur-lg rounded-full border border-gray-800 hover:bg-gray-800 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-lg"
        >
          Próximo →
        </button>
      </div>

      {/* Progress indicator */}
      <div className="fixed top-8 right-8 z-20 text-gray-700 text-lg font-mono font-semibold">
        {currentSession + 1} / {sessions.length}
      </div>

      {/* Tech Mode Toggle (Easter Egg) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: techMode ? 1 : 0.3 }}
        onClick={() => setTechMode((prev) => !prev)}
        className="fixed top-8 left-8 z-20 px-4 py-2 bg-orange-500/20 backdrop-blur-lg rounded-full border border-orange-400/50 hover:bg-orange-500/40 transition-all text-sm shadow-lg text-gray-700"
        title="Ctrl+T"
      >
        {techMode ? "🔧 Modo Técnico ON" : "💻"}
      </motion.button>

      {/* Tech Mode Overlay */}
      <AnimatePresence>
        {techMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-8 z-20 bg-white/95 backdrop-blur-lg rounded-xl p-4 border border-orange-400/70 shadow-2xl shadow-orange-500/20 max-w-xs"
          >
            <h4 className="text-orange-600 font-bold mb-2">Stack Técnico</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Next.js 15 (App Router)</li>
              <li>• TypeScript</li>
              <li>• Framer Motion</li>
              <li>• Tailwind CSS v4</li>
              <li>• shadcn/ui</li>
              <li>• Poppins Font</li>
            </ul>
            <div className="mt-3 text-xs text-gray-500">
              Sessão: {sessions[currentSession]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard hints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-24 left-0.5 right-21 text-center text-gray-400 text-sm z-10"
      >
        Use as setas ← → ou Space para navegar • Ctrl+T para modo técnico
      </motion.div>

      {/* Snowfall effect */}
      <Snowfall />

      {/* Gear and Belt */}
      <GearBelt currentSession={currentSession} totalSessions={sessions.length} />

      {/* Audio Player */}
      <AudioPlayer />
    </div>
  );
}
