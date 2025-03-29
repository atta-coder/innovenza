import React, { createContext, useContext, useState, useEffect } from 'react';
import { useThemeTransition } from '../hooks/useThemeTransition';

type ThemeContextType = {
  currentTheme: any;
  setCurrentTheme: (theme: any) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    background: 'bg-gradient-to-br from-violet-50 to-indigo-50',
    text: 'text-gray-900',
    accent: 'from-violet-600 to-indigo-500'
  });

  const { theme } = useThemeTransition('hero');

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};