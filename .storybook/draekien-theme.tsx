/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create } from '@storybook/theming';
import { Button, ThemeProvider } from '../src';

export const draekienStorybookTheme = create({
  base: 'light',
});

export const themeDecorator = (storyFn: any) => (
  <ThemeProvider>
    <Router>
      {storyFn()}
      <ThemeButton />
    </Router>
  </ThemeProvider>
);

const ThemeButton = () => {
  const themes = ['light', 'dark'];
  const [mode, setMode] = useColorMode();
  const count = parseInt(sessionStorage.getItem('theme-ui-count')) || 0;

  React.useEffect(() => {
    if (!count && !['dark', 'light'].includes(mode)) setMode('light');
  });

  const onClick = () => {
    let next;
    if (count < 10) {
      next = mode === 'dark' ? 'light' : 'dark';
      sessionStorage.setItem('theme-ui-count', (count + 1).toString());
    } else {
      let index = themes.indexOf(mode) + 1;
      if (index === themes.length) index = 0;
      next = themes[index];
    }
    setMode(next);
  };

  return (
    <div
      sx={{
        position: 'fixed',
        right: '2.5rem',
        bottom: '2.5rem',
        zIndex: '300',
      }}
    >
      <Button variant="primary" onClick={onClick}>
        Change Theme
      </Button>
    </div>
  );
};
