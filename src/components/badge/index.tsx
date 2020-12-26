/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export type BadgeProps = {
  /** color of the badge
   * @default 'primary'
   */
  color?: keyof typeof colors | string;
  /** the position of the badge
   * @example { 'right' : 0 }
   */
  position?: styles.BadgePosition;
  children?: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ color, position, children }) => {
  return <Box sx={styles.badgeCss(color, position)}>{children}</Box>;
};

export default Badge;
