/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import * as React from 'react';
import { ValidationColor } from '../../utils/iconMapper.utils';
import { bulletCss } from './index.styles';

export interface BulletProps extends React.HTMLAttributes<HTMLDivElement> {
  /** bullet contents */
  children: React.ReactNode;
  /** color of the bullet
   * @default 'muted'
   */
  color?: ValidationColor | 'muted' | 'primary' | 'secondary';
  /** should the bullet take up the full width of the parent container
   * @default false
   */
  fullWidth?: boolean;
  /** should the colors be inverted
   * @default false
   */
  invert?: boolean;
}

export const Bullet: React.FC<BulletProps> = ({
  children,
  color = 'muted',
  fullWidth = false,
  invert = false,
  ...rest
}) => {
  return (
    <Box sx={bulletCss({ color, fullWidth, invert })} {...rest}>
      {children}
    </Box>
  );
};

export default Bullet;
