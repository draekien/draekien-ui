/** @jsxImportSource theme-ui */
import { Text as ThemeUiText, ThemeUIStyleObject } from 'theme-ui';
import React from 'react';
import { colors } from '../theme/colors';
import { text } from '../theme/typography';
import * as styles from './index.styles';

export type TextProps = {
  /** the html component to render
   * @default 'div'
   */
  as?: React.ElementType<any>;
  /** Text to display */
  children: React.ReactNode;
  /** color of text
   * @default 'text'
   */
  color?: keyof typeof colors;
  /** should container be full width of parent
   * @default false
   */
  fullWidth?: boolean;
  /** alignment of the text
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /** text style to apply
   * @default 'medium'
   */
  variant?: keyof typeof text;
  /** should text truncate instead of overflow
   * @default false
   */
  truncate?: boolean;
  /** the margin */
  margin?: string | string[];
  /** custom styling */
  sx?: ThemeUIStyleObject;
};

export const Text: React.FC<TextProps> = (props) => {
  const {
    as,
    children,
    color = 'text',
    fullWidth = false,
    align = 'left',
    variant = 'medium',
    truncate = false,
    margin,
    sx,
  } = props;
  return (
    <ThemeUiText
      as={as}
      variant={variant}
      sx={{
        ...styles.textCss({ color, fullWidth, align, truncate, margin }),
        ...sx,
      }}
    >
      {children}
    </ThemeUiText>
  );
};

export default Text;
