/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button as ThemeUiButton } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: styles.ButtonVariant;
  size?: styles.ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  isActive = false,
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <ThemeUiButton
      sx={styles.buttonCss({
        variant,
        size,
        disabled,
        fullWidth,
        active: isActive,
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </ThemeUiButton>
  );
};

export default Button;
