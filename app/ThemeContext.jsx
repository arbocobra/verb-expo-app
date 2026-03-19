import { themes } from '@/constants/theme';
import { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext({
   theme: themes.light,
});

const ThemeProvider = ({ children }) => {
   const colourScheme = Appearance.getColorScheme();
   const [mode, setMode] = useState(colourScheme || 'light');

   useEffect(() => {
      const subscription = Appearance.addChangeListener(({ colourScheme }) => {
         setMode(colourScheme);
      });
      return () => subscription.remove();
   }, []);

   // const toggleTheme = () => {
   //    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
   // };

   const currentTheme = themes[mode] || themes.light;

   return <ThemeContext.Provider value={{ theme: currentTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
