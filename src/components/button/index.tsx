/** @jsx jsx */
import { jsx, Button as ThemeUiButton } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';

export type ButtonProps = {
  variant?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <ThemeUiButton
      sx={styles.buttonCss}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </ThemeUiButton>
  );
};

export default Button;
