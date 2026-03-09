export const luxuryScrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Mobile-only scroll offset adjustment: use 40 for mobile, keep 80 for desktop/tablet
  const finalOffset = window.innerWidth < 768 ? 40 : offset;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - finalOffset;
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = 1300;
  let start: number | null = null;

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
