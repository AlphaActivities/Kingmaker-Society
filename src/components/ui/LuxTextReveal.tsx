import { useEffect, useRef, useState } from 'react';

interface LuxTextRevealProps {
  children: string | React.ReactNode;
  delay?: number;
  charInterval?: number;
  pauseAfter?: number;
  onComplete?: () => void;
  className?: string;
  preserveFormatting?: boolean;
}

export default function LuxTextReveal({
  children,
  delay = 0,
  charInterval = 40,
  pauseAfter = 0,
  onComplete,
  className = '',
  preserveFormatting = true,
}: LuxTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedChars, setRevealedChars] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout>();
  const completionRef = useRef<NodeJS.Timeout>();

  const textContent = typeof children === 'string' ? children : extractTextFromReactNode(children);
  const totalChars = textContent.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      if (completionRef.current) {
        clearTimeout(completionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && revealedChars < totalChars) {
      const startDelay = delay * 1000;

      const startAnimation = () => {
        const revealNextChar = () => {
          setRevealedChars((prev) => {
            const next = prev + 1;

            if (next < totalChars) {
              animationRef.current = setTimeout(revealNextChar, charInterval);
            } else if (next === totalChars) {
              if (onComplete) {
                completionRef.current = setTimeout(() => {
                  onComplete();
                }, pauseAfter);
              }
            }

            return next;
          });
        };

        revealNextChar();
      };

      animationRef.current = setTimeout(startAnimation, startDelay);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      if (completionRef.current) {
        clearTimeout(completionRef.current);
      }
    };
  }, [isVisible, charInterval, delay, pauseAfter, onComplete, totalChars]);

  const renderContent = () => {
    if (typeof children === 'string') {
      return renderTextWithAnimation(children, revealedChars);
    } else {
      return renderReactNodeWithAnimation(children, revealedChars);
    }
  };

  return (
    <div ref={elementRef} className={className} style={{ willChange: 'transform, opacity' }}>
      {renderContent()}
    </div>
  );
}

function extractTextFromReactNode(node: React.ReactNode): string {
  if (typeof node === 'string') {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join('');
  }

  if (node && typeof node === 'object' && 'props' in node) {
    return extractTextFromReactNode(node.props.children);
  }

  return '';
}

function renderTextWithAnimation(text: string, revealedChars: number) {
  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: index < revealedChars ? 1 : 0,
            transform: index < revealedChars ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            willChange: 'transform, opacity',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

function renderReactNodeWithAnimation(node: React.ReactNode, revealedChars: number): React.ReactNode {
  let charCounter = 0;

  const processNode = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === 'string') {
      const chars = child.split('');
      return chars.map((char, index) => {
        const currentCharIndex = charCounter++;
        return (
          <span
            key={`char-${currentCharIndex}`}
            className="inline-block"
            style={{
              opacity: currentCharIndex < revealedChars ? 1 : 0,
              transform: currentCharIndex < revealedChars ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform, opacity',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      });
    }

    if (Array.isArray(child)) {
      return child.map((item, index) => <span key={index}>{processNode(item)}</span>);
    }

    if (child && typeof child === 'object' && 'props' in child) {
      const element = child as React.ReactElement;
      return {
        ...element,
        props: {
          ...element.props,
          children: processNode(element.props.children),
        },
      };
    }

    return child;
  };

  return processNode(node);
}
