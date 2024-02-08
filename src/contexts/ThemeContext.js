import { createContext, useState, useContext } from 'react';

const ThemeContextProvider = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'dark'
  );

  return (
    <ThemeContextProvider.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContextProvider);
