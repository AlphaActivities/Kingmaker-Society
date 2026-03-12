import { useEffect, useRef, useState, ReactNode } from 'react';

interface LuxTextRevealProps {
  children: ReactNode;
  delay?: number;
  charInterval?: number;
  animDuration?: number;
  pauseAfter?: number;
  onComplete?: () => void;
  className?: string;
}

export default function LuxTextReveal({
  children,
  delay = 0,
  charInterval = 40,
  animDuration = 300,
  pauseAfter = 0,
  onComplete,
  className = ''
}: LuxTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const extractTextContent = (node: ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractTextContent).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      return extractTextContent(node.props.children);
    }
    return '';
  };

  const totalChars = extractTextContent(children).length;

  const renderWithReveal = (node: ReactNode, charIndex: { current: number }): ReactNode => {
    if (typeof node === 'string') {
      return node.split('').map((char, idx) => {
        const currentIndex = charIndex.current++;
        return (
          <span
            key={`${currentIndex}-${idx}`}
            style={{
              display: 'inline-block',
              opacity: currentIndex < revealedChars ? 1 : 0,
              transform: currentIndex < revealedChars ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity ${animDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${animDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              whiteSpace: char === ' ' ? 'pre' : 'normal',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      });
    }

    if (typeof node === 'number') {
      return String(node);
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => (
        <span key={idx}>{renderWithReveal(child, charIndex)}</span>
      ));
    }

    if (node && typeof node === 'object' && 'props' in node) {
      const element = node as React.ReactElement;
      const newChildren = renderWithReveal(element.props.children, charIndex);

      return {
        ...element,
        props: {
          ...element.props,
          children: newChildren,
        },
      };
    }

    return node;
  };

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
          const next = prev + 1;
          if (next >= totalChars) {
            clearInterval(interval);
            if (onComplete) {
              setTimeout(() => {
                onComplete();
              }, pauseAfter);
            }
          }
          return next;
        });
      }, charInterval);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [isVisible, delay, charInterval, totalChars, pauseAfter, onComplete]);

  const charIndex = { current: 0 };

  return (
    <div ref={elementRef} className={className}>
      {renderWithReveal(children, charIndex)}
    </div>
  );
}
