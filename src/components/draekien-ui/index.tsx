import * as React from 'react';
import { ThemeProvider } from '../theme';
import { ThemeType } from '../theme/theme';

export type DraekienUiProps = {
  /** any theme overrides */
  theme?: Partial<ThemeType>;
  /** the main application */
  children: React.ReactNode;
};

export const DraekienUi: React.FC<DraekienUiProps> = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DraekienUi;
