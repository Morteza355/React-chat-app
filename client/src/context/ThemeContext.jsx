import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => setIsDark(dark => !dark);
  
  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleDark,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const value = useContext(ThemeContext);

  if(!value) throw new Error('ThemeContext was used outside of ThemeContextProvider !');

  return value;
}
