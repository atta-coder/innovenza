import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type ThemeConfig = {
  background: string;
  text: string;
  accent: string;
};

const theme: ThemeConfig = {
  background: 'bg-background',
  text: 'text-primary',
  accent: 'from-accent to-accent-dark'
};

export const useThemeTransition = (sectionId: string) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return { ref, theme, inView };
};