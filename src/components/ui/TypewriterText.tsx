import { useEffect, useState, useRef, useMemo } from 'react';

interface HighlightConfig {
  word: string;
  className: string;
}

interface TypewriterLine {
  text: string;
  className?: string;
  highlights?: HighlightConfig[];
}

interface TypewriterTextProps {
  lines: TypewriterLine[];
  onComplete?: () => void;
  charDelay?: number;
  lineDelay?: number;
}

export default function TypewriterText({
  lines,
  onComplete,
  charDelay = 35,
  lineDelay = 200,
}: TypewriterTextProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const processedLines = useMemo(() => {
    return lines.map((line) => {
      if (!line.highlights || line.highlights.length === 0) {
        return { ...line, segments: [{ text: line.text, className: '' }] };
      }

      const segments: Array<{ text: string; className: string; isHighlight: boolean }> = [];
      let lastIndex = 0;

      line.highlights.forEach(({ word, className }) => {
        const index = line.text.indexOf(word, lastIndex);
        if (index !== -1) {
          if (index > lastIndex) {
            segments.push({
              text: line.text.slice(lastIndex, index),
              className: '',
              isHighlight: false,
            });
          }
          segments.push({
            text: word,
            className,
            isHighlight: true,
          });
          lastIndex = index + word.length;
        }
      });

      if (lastIndex < line.text.length) {
        segments.push({
          text: line.text.slice(lastIndex),
          className: '',
          isHighlight: false,
        });
      }

      return { ...line, segments };
    });
  }, [lines]);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      if (!isComplete) {
        setIsComplete(true);
        if (onComplete) {
          setTimeout(() => onComplete(), 100);
        }
      }
      return;
    }

    const currentLine = lines[currentLineIndex];
    const currentText = currentLine.text;

    if (currentCharIndex < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, charDelay);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLineIndex, currentCharIndex, lines, charDelay, lineDelay, onComplete, isComplete]);

  return (
    <div className="typewriter-container">
      {processedLines.map((line, lineIdx) => {
        const isCurrentLine = lineIdx === currentLineIndex;
        const isPastLine = lineIdx < currentLineIndex;
        const shouldShow = isCurrentLine || isPastLine;

        if (!shouldShow) return null;

        const visibleCharCount = isPastLine ? line.text.length : currentCharIndex;
        let charCounter = 0;

        return (
          <div
            key={lineIdx}
            className={`${line.className || ''} typewriter-line`}
            style={{
              minHeight: '1em',
            }}
          >
            {line.segments.map((segment, segIdx) => {
              const segmentChars = segment.text.split('');
              const segmentStartIndex = charCounter;
              const renderedChars = segmentChars.map((char, charIdx) => {
                const absoluteCharIndex = segmentStartIndex + charIdx;
                const isVisible = absoluteCharIndex < visibleCharCount;
                charCounter++;

                if (!isVisible) return null;

                return (
                  <span
                    key={`${lineIdx}-${segIdx}-${charIdx}`}
                    className={`typewriter-char ${segment.isHighlight ? segment.className : ''}`}
                    style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: `luxTypewriterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                      animationDelay: `${absoluteCharIndex * 0.015}s`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                );
              });

              return (
                <span key={`${lineIdx}-${segIdx}`} className={segment.isHighlight ? 'inline' : ''}>
                  {renderedChars}
                </span>
              );
            })}
          </div>
        );
      })}

      <style>{`
        @keyframes luxTypewriterReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }
          50% {
            opacity: 0.7;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .typewriter-char {
          will-change: opacity, transform;
        }

        .typewriter-line {
          overflow: visible;
        }

        .typewriter-container {
          overflow: visible;
        }
      `}</style>
    </div>
  );
}
