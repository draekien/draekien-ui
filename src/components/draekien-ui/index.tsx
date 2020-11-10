import * as React from 'react';
import { ThemeProvider } from '../theme';
import { ThemeType } from '../theme/theme';
import { ToastContainer } from '../toast/container';
import { ToastProvider } from '../toast/provider';

export type DraekienUiProps = {
  /** any theme overrides */
  theme?: Partial<ThemeType>;
  /** should the toast context be used
   * @default true
   */
  useToastContext?: boolean;
  /** offset top of toast container. Required if using toast context
   * @default '0'
   */
  toastContainerOffsetTop?: string | string[];
  /** the main application */
  children: React.ReactNode;
};

export const DraekienUi: React.FC<DraekienUiProps> = (props) => {
  const {
    theme,
    children,
    useToastContext = true,
    toastContainerOffsetTop = '0',
  } = props;
  const ConditionalToastContext = ({ children }: any) => {
    if (useToastContext && toastContainerOffsetTop) {
      return (
        <ToastProvider>
          <ToastContainer offsetTop={toastContainerOffsetTop} />
          {children}
        </ToastProvider>
      );
    }

    return children;
  };

  return (
    <ThemeProvider theme={theme}>
      <ConditionalToastContext>{children}</ConditionalToastContext>
    </ThemeProvider>
  );
};

export default DraekienUi;
