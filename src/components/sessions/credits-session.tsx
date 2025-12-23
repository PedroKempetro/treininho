"use client";

import { Intern } from "@/types/kempetro-wrapped";
import { TypewriterText } from "@/components/typewriter-text";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import { Share2, Download } from "lucide-react";

interface CreditsSessionProps {
  interns: Intern[];
  companyName: string;
  year: string;
}

export function CreditsSession({ interns, companyName, year }: CreditsSessionProps) {
  const [currentIntern, setCurrentIntern] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const internsWithMessages = interns.filter(intern => intern.message);

  const handleShare = async () => {
    if (!cardRef.current) return;
    
    setIsSharing(true);
    
    try {
      // Captura o card como imagem
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });

      // Converte para blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `${intern.name}-kempetro.png`, { type: 'image/png' });

      // Tenta usar Web Share API
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `Mensagem para ${intern.name}`,
          text: `Confira essa mensagem especial da Kempetro!`,
        });
      } else {
        // Fallback: download da imagem
        const link = document.createElement('a');
        link.download = `${intern.name}-kempetro.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    } finally {
      setIsSharing(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        if (currentIntern < internsWithMessages.length - 1) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIntern(prev => prev + 1);
            setIsTransitioning(false);
          }, 500);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIntern > 0) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIntern(prev => prev - 1);
            setIsTransitioning(false);
          }, 500);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIntern, internsWithMessages.length, isTransitioning]);

  const intern = internsWithMessages[currentIntern];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIntern}
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="relative max-w-4xl w-full z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card principal */}
          <div 
            ref={cardRef}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{
              border: "2px solid rgba(249, 115, 22, 0.3)",
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.2)"
            }}
          >
            {/* Botão de compartilhar */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              onClick={handleShare}
              disabled={isSharing}
              className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
              title="Compartilhar este card"
            >
              {isSharing ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Share2 className="w-5 h-5" />
              )}
            </motion.button>
            {/* Logo Kempetro */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/kempetrologo2.png"
                  alt="Kempetro"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Nome */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
            >
              {intern.name}
            </motion.h2>

            {/* Mensagem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-base md:text-lg leading-relaxed text-gray-800 text-center italic px-4"
            >
              <TypewriterText
                text={intern.message || ""}
                speed={30}
                delay={1200}
              />
            </motion.div>

            {/* Partículas decorativas */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400/60 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Contador */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-center text-white text-sm"
          >
            {currentIntern + 1} de {internsWithMessages.length}
          </motion.div>

          {/* Indicador de navegação */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-4 text-center text-gray-300 text-xs"
          >
            Use ← → para navegar entre as mensagens
          </motion.div>

          {/* Dots de progresso */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap max-w-md mx-auto">
            {internsWithMessages.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: i === currentIntern ? 1.5 : 1,
                  backgroundColor: i === currentIntern ? "#f97316" : "rgba(249, 115, 22, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full cursor-pointer"
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIntern(i);
                      setIsTransitioning(false);
                    }, 500);
                  }
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
