import { useEffect, useRef, useState, ReactNode } from 'react';

interface CharacterRevealProps {
  children: string;
  delay?: number;
  charInterval?: number;
  pauseAfter?: number;
  onComplete?: () => void;
  className?: string;
}

export default function CharacterReveal({
  children,
  delay = 0,
  charInterval = 40,
  pauseAfter = 0,
  onComplete,
  className = ''
}: CharacterRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const totalChars = children.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setRevealedChars((prev) => {
          if (prev >= totalChars) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, charInterval);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(delayTimer);
  }, [isVisible, delay, charInterval, totalChars]);

  useEffect(() => {
    if (revealedChars >= totalChars && onComplete) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, pauseAfter);

      return () => clearTimeout(completeTimer);
    }
  }, [revealedChars, totalChars, onComplete, pauseAfter]);

  return (
    <div ref={elementRef} className={className}>
      {children.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < revealedChars ? 1 : 0,
            transform: index < revealedChars ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
