/** @jsx jsx */
import { jsx, Button as ThemeUiButton } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';

export type ButtonProps = {
  variant?: styles.ButtonVariant;
  size?: styles.ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <ThemeUiButton
      sx={styles.buttonCss({ variant, size })}
      onClick={onClick}
      {...props}
    >
      {children}
    </ThemeUiButton>
  );
};

export default Button;
