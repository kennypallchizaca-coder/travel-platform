import { useEffect } from 'react';

export const useScrollAnimation = (): void => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
        }
      });
    }, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []); 
};
