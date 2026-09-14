/**
 * Smooth scroll helper that calculates header offset and provides
 * a smooth cubic-bezier scrolling animation across all browsers and devices.
 */
export function scrollToSection(target: string | HTMLElement, offset: number = 70, duration: number = 750): void {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const targetRect = element.getBoundingClientRect();
  const targetY = startY + targetRect.top - offset;
  const distance = targetY - startY;

  // If distance is very small, scroll immediately
  if (Math.abs(distance) < 5) return;

  let startTime: number | null = null;

  // EaseInOutCubic for a smooth, natural deceleration feel
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
