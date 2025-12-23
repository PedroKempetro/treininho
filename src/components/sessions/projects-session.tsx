"use client";

import { useState } from "react";
import { Project } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectsSessionProps {
  projects: Project[];
}

type EffectType = "zoom" | "blur" | "color";

export function ProjectsSession({ projects }: ProjectsSessionProps) {
  const [selectedEffect, setSelectedEffect] = useState<EffectType>("zoom");

  const awards = [
    {
      id: 1,
      title: "Medalha de Prata",
      subtitle: "no Diagnóstico Estratégico do Programa de Estágio - IEL/BA",
      description: "Reconhecimento pela excelência em engenharia",
      image: "/medalhadeprata.jpg",
      color: "from-gray-300 to-gray-500",
      borderColor: "border-gray-400"
    },
    {
      id: 2,
      title: "1º Lugar - Ranking de Engenharia",
      subtitle: "no Norte/Nordeste Ranking de Engenharia 2025",
      description: "Presidente conquistou o primeiro lugar no ranking",
      image: "/primeirolugar.jpg",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400"
    },
    {
      id: 3,
      title: "1º Lugar - Inovação",
      subtitle: "no Norte/Nordeste Ranking de Engenharia 2025",
      description: "Primeiro lugar no reconhecimento de inovação",
      image: "/primeirolugar2.jpg",
      color: "from-orange-400 to-red-500",
      borderColor: "border-orange-400"
    }
  ];

  const getCardClassName = () => {
    const baseClass = "relative w-full max-w-[280px] h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_16px_60px_rgba(0,0,0,0.3)] transition-all duration-[650ms]";
    
    if (selectedEffect === "zoom") {
      return `${baseClass} hover:shadow-[0_40px_130px_rgba(0,0,0,0.6)] hover:scale-110`;
    } else if (selectedEffect === "blur") {
      return `${baseClass} hover:shadow-[0_40px_130px_rgba(0,0,0,0.6)] hover:scale-110`;
    } else if (selectedEffect === "color") {
      return `${baseClass} hover:shadow-[0_40px_260px_rgba(255,0,0,0.1),0_40px_130px_rgba(250,100,100,0.2),-80px_-40px_230px_rgba(0,200,250,0.15),80px_40px_230px_rgba(120,120,255,0.15)]`;
    }
    return baseClass;
  };

  const getImageClassName = () => {
    if (selectedEffect === "zoom") {
      return "scale-[1.3] group-hover:scale-100 group-hover:opacity-50 transition-all duration-[650ms]";
    } else if (selectedEffect === "blur") {
      return "scale-[1.3] animate-[zoom_30s_linear_infinite_alternate] group-hover:scale-[2] group-hover:blur-[3px] transition-all duration-[650ms]";
    } else if (selectedEffect === "color") {
      return "scale-[1.3] group-hover:scale-100 group-hover:opacity-80 transition-all duration-[650ms]";
    }
    return "";
  };

  const getBackgroundGradient = () => {
    if (selectedEffect === "color") {
      return "bg-gradient-to-b from-[rgb(20,20,100)] to-[rgba(255,100,100,0.5)]";
    }
    return "bg-gradient-to-b from-black to-black/50";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        <TypewriterText text="Premiações" speed={60} />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xl text-gray-900 mb-8 text-center"
      >
        <TypewriterText
          text="Conquistas que marcaram nossa trajetória"
          speed={50}
          delay={1800}
        />
      </motion.p>

      {/* Menu de efeitos */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mb-12"
      >
        <ul className="flex gap-4 justify-center">
          {[
            { id: "zoom", label: "Zoom out" },
            { id: "blur", label: "Blur" },
            { id: "color", label: "Colors" }
          ].map((effect) => (
            <li key={effect.id}>
              <button
                onClick={() => setSelectedEffect(effect.id as EffectType)}
                className={`relative px-6 py-3 text-sm font-normal uppercase tracking-wider transition-all duration-[650ms] ${
                  selectedEffect === effect.id
                    ? "text-[rgba(100,100,250,1)]"
                    : "text-gray-400 hover:text-[rgba(150,150,255,1)]"
                }`}
              >
                {effect.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[rgba(100,100,250,1)] transition-all duration-[650ms] ${
                    selectedEffect === effect.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Cards de premiações */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {awards.map((award, i) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 3 + i * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center"
          >
            <div className={`group ${getCardClassName()} ${award.borderColor} border-2`}>
              {/* Background Image */}
              <div className={`absolute inset-0 -z-10 ${getBackgroundGradient()} pointer-events-none`}>
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className={`object-cover object-center ${getImageClassName()}`}
                />
              </div>

              {/* Header com logo/ícone */}
              <div className="flex items-center justify-center h-[200px]">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={96}
                    height={96}
                    className="object-cover scale-150 grayscale-[50%] contrast-75 brightness-[1.3] group-hover:scale-100 transition-transform duration-[650ms]"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="px-5 text-center">
                <h3 className="text-2xl font-light uppercase tracking-wider mb-1 text-white bg-clip-text bg-gradient-to-b from-white to-gray-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] transition-all duration-[650ms] group-hover:from-white group-hover:to-gray-300">
                  {award.title}
                </h3>
                <p className="text-[10px] font-light uppercase tracking-[0.35rem] text-blue-400/45 group-hover:text-blue-400 transition-colors duration-[650ms]">
                  {award.subtitle}
                </p>

                {/* Bio (aparece no hover) */}
                <p className="mt-6 text-sm font-light text-white/65 translate-y-[30%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[650ms]">
                  {award.description}
                </p>
              </div>

              {/* Footer (aparece no hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-[60%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[650ms]">
                <p className="text-[10px] font-light uppercase text-gray-400/40">
                  2024 - 2025
                </p>
              </div>

              {/* Bookmark button */}
              <button className="absolute top-3 right-3 w-9 h-9 bg-transparent border-0 opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity duration-[650ms] rounded-md">
                <span className="text-white/60 text-lg">🔖</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
