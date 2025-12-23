"use client";

import { useTypewriter } from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className,
  cursorClassName,
  onComplete,
  showCursor = true,
}: TypewriterTextProps) {
  const { displayedText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && !isComplete && (
        <span
          className={cn(
            "inline-block w-[3px] h-[1em] ml-1 bg-current animate-pulse",
            cursorClassName
          )}
        />
      )}
    </span>
  );
}
