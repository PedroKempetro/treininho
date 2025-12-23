"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          console.log("Autoplay bloqueado, aguardando interação do usuário");
          setIsPlaying(false);
        }
      };

      playAudio();
    }
  }, []);

  const handleButtonClick = async () => {
    if (!audioRef.current) return;

    if (!hasInteracted) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
        setIsMuted(false);
      } catch (error) {
        console.error("Erro ao iniciar áudio:", error);
      }
    } else {
      if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const getIcon = () => {
    if (!hasInteracted || !isPlaying) {
      return <Play className="w-6 h-6" />;
    }
    return isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />;
  };

  const getTitle = () => {
    if (!hasInteracted || !isPlaying) {
      return "Clique para iniciar a música";
    }
    return isMuted ? "Ativar som" : "Desativar som";
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/award.mp3"
        loop
        preload="auto"
      />

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={handleButtonClick}
        className={`fixed bottom-6 left-6 z-50 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all ${
          !hasInteracted || !isPlaying
            ? "bg-gradient-to-r from-green-500 to-green-600 animate-pulse"
            : "bg-gradient-to-r from-orange-500 to-orange-600"
        }`}
        title={getTitle()}
      >
        {getIcon()}
      </motion.button>
    </>
  );
}
