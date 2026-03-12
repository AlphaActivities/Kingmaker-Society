import { useState, useEffect, useRef } from 'react';

interface TypewriterConfig {
  texts: string[];
  speeds?: number[];
  startDelay?: number;
  onComplete?: () => void;
}

export function useTypewriter({ texts, speeds = [], startDelay = 0, onComplete }: TypewriterConfig) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(texts.map(() => ''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex >= texts.length) {
      setIsComplete(true);
      if (onComplete) {
        timeoutRef.current = setTimeout(onComplete, 300);
      }
      return;
    }

    const currentText = texts[currentIndex];
    const speed = speeds[currentIndex] || 50;
    let charIndex = 0;

    const initialDelay = currentIndex === 0 ? startDelay : 0;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[currentIndex] = currentText.slice(0, charIndex);
            return newTexts;
          });
          charIndex++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
          }, 300);
        }
      }, speed);
    }, initialDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, texts, speeds, startDelay, onComplete]);

  return { displayedTexts, isComplete, showCursor: showCursor && !isComplete, currentIndex };
}
