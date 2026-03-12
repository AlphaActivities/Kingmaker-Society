import { useEffect, useState, useRef, ReactNode } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  charInterval?: number;
  pauseAfter?: number;
  onComplete?: () => void;
  children?: ReactNode;
}

export default function TypewriterText({
  text,
  className = '',
  delay = 0,
  charInterval = 40,
  pauseAfter = 0,
  onComplete,
  children
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
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
    if (!shouldStart) return;

    if (prefersReducedMotion.current) {
      setDisplayedText(text);
      setIsComplete(true);
      if (onComplete) {
        setTimeout(onComplete, delay);
      }
      return;
    }

    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      let lastTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - lastTime;

        if (elapsed >= charInterval) {
          if (currentIndex < text.length) {
            currentIndex++;
            setDisplayedText(text.slice(0, currentIndex));
            lastTime = currentTime;
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setIsComplete(true);
            if (onComplete) {
              setTimeout(onComplete, pauseAfter);
            }
          }
        } else {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldStart, text, delay, charInterval, pauseAfter, onComplete]);

  return (
    <div ref={elementRef} className={className} style={{ minHeight: '1.5em' }}>
      {shouldStart && displayedText.length > 0 && (
        <span className="inline-block">
          {displayedText.split('').map((char, index) => (
            <span
              key={`char-${index}`}
              className="typewriter-char"
              style={{
                animation: prefersReducedMotion.current
                  ? 'none'
                  : 'charFadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                opacity: prefersReducedMotion.current ? 1 : 0,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          {!isComplete && (
            <span className="inline-block w-[2px] h-[1.2em] bg-[#FFC300] ml-[2px] animate-pulse align-middle" />
          )}
        </span>
      )}
      {children && isComplete && children}
    </div>
  );
}
