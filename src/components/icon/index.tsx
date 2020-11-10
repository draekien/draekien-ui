/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { colors } from '../theme/colors';
import * as styles from './index.styles';

export type IconSize = 'small' | 'medium' | 'large';
export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'rounded'
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

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name, color, size = 'medium', variant, ...rest } = props;

  const getIconClassName = (variant?: IconVariant) => {
    switch (variant) {
      case 'outlined':
      case 'rounded':
      case 'sharp':
      case 'two-tone':
        return `material-icons-${variant}`;
      default:
        return 'material-icons';
    }
  };

  return (
    <i
      sx={styles.iconCss({ size, color })}
      className={getIconClassName(variant)}
      {...rest}
    >
      {name}
    </i>
  );
};

export default Icon;
