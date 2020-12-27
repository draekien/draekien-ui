/** @jsxImportSource theme-ui */

import React from 'react';
import { colors } from '../theme/colors';
import * as styles from './index.styles';

export type IconSize = 'small' | 'medium' | 'large';
export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';
export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Material Icons name */
  name: string;
  /** Icon size
   * @default 'medium'
   */
  size?: IconSize;
  /** Material Icon variant
   * @default 'filled'
   */
  variant?: IconVariant;
  /** Icon color */
  color?: keyof typeof colors;
}

const getIconClassName = (variant?: IconVariant) => {
  switch (variant) {
    case 'outlined':
    case 'round':
    case 'sharp':
    case 'two-tone':
      return `material-icons-${variant}`;
    default:
      return 'material-icons';
  }
};

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name, color, size = 'medium', variant, className, ...rest } = props;

  return (
    <i
      sx={styles.iconCss({ size, color })}
      className={`${getIconClassName(variant)} ${className || ''}`}
      {...rest}
    >
      {name}
    </i>
  );
};

export default Icon;
