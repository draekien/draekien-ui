import * as React from 'react';
import { ThemeProvider as ThemeUiProvider } from 'theme-ui';
import { DraekienTheme, ThemeType } from './theme';

export type ThemeProviderProps = {
  theme?: Partial<ThemeType>;
  children: React.ReactNode;
};

const mergeThemes = (target: any, source: any) => {
  Object.keys(source).forEach((key) => {
    if (key === '__proto__' || key === 'constructor') return;
    if (source[key] && typeof source[key] === 'object') {
      mergeThemes((target[key] = target[key] || {}), source[key]);
      return;
    }
    target[key] = source[key];
  });
};

const addFonts = () => {
  const fonts: { [key: string]: string } = {
    montserratFont:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
    materialIconsFont:
      'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
  };

  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  document.head.appendChild(preconnect);

  Object.keys(fonts).forEach((key) => {
    const linkExists = document.getElementById(key);
    if (!linkExists) {
      const link = document.createElement('link');
      link.id = key;
      link.rel = 'stylesheet';
      link.href = fonts[key];
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const newTheme = JSON.parse(JSON.stringify(DraekienTheme));

  if (theme) mergeThemes(newTheme, theme);

  React.useEffect(() => {
    addFonts();
  }, []);

  return <ThemeUiProvider theme={newTheme}>{children}</ThemeUiProvider>;
};
