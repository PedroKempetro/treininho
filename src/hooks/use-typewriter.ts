"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, onComplete]);

  const reset = useCallback(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  return { displayedText, isComplete, reset };
}
