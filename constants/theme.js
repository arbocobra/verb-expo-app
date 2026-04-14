const defaultColours = {
   primary: '#e20535',
   primaryLight: '#e7375d',
   primaryExtraLight: '#eb5f7d',
   primaryDark: '#9e0325',
   secondary: '#05e2b2',
   secondaryLight: '#5febcd',
   secondaryExtraLight: '#79ebd3',
   secondaryDark: '#039e7c',
   // tertiary: '#e7c137',
   // tertiaryLight: '#ebcd5f',
   // tertiaryExtraLight: '#ebd47c',
   // tertiaryDark: '#e19a00',
   tertiary: '#FFC847',
   tertiaryLight: '#FFCE5C',
   tertiaryExtraLight: '#FFD470',
   tertiaryDark: '#F5AB00',

   // primary: '#ef476f',
   // primaryLight: '#f26d8c',
   // primaryExtraLight: '#f58ba3',
   // primaryDark: '#d71340',
   // secondary: '#06d6a0',
   // secondaryLight: '#1cf9be',
   // secondaryExtraLight: '#48facb',
   // secondaryDark: '#04a077',
   // tertiary: '#ffd166',
   // tertiaryLight: '#ffda85',
   // tertiaryExtraLight: '#ffe29d',
   // tertiaryDark: '#ffb60d',
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
