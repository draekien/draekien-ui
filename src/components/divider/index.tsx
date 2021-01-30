/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export interface DividerProps {
  /** type of divider to render
   * @default 'gradient'
   */
  variant?: 'solid' | 'gradient';
  /** color of the divider when variant is solid
   * @default 'muted'
   */
  color?: keyof typeof colors;
  /** size of the divider to render
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /** should the divider be vertical or horizontal
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** should the divider fill the entire width / height of the parent container
   * @default false
   */
  fullWidth?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'gradient',
  color = 'muted',
  size = 'md',
  orientation = 'horizontal',
  fullWidth,
}) => {
  const props = { variant, color, size, orientation, fullWidth };

  return <div sx={styles.dividerCss(props)} />;
};

export default Divider;
