import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
  export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

  export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
    const context = useContext(ThemeContext);
  
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
  
    return context;
  }