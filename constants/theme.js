const defaultColours = {
   primary: '#e20535',
   primaryLight: '#e7375d',
   primaryExtraLight: '#eb5f7d',
   primaryDark: '#9e0325',
   secondary: '#05e2b2',
   secondaryLight: '#5febcd',
   secondaryExtraLight: '#79ebd3',
   secondaryDark: '#039e7c',
   tertiary: '#e7c137',
   tertiaryLight: '#ebcd5f',
   tertiaryExtraLight: '#ebd47c',
   tertiaryDark: '#e19a00',
};

const lightTheme = {
   ...defaultColours,
   background: '#fff',
   text: '#222',
};
const darkTheme = {
   ...defaultColours,
   background: '#333',
   text: '#fff',
};

export const themes = { light: lightTheme, dark: darkTheme };
