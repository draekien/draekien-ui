/** @jsxImportSource theme-ui */
import * as React from 'react';
import { colors } from '../theme/colors';
import * as styles from './index.styles';

export interface SkeletonProps {
  /** The height of the element
   * @default '1rem'
   */
  height?: string | number;
  /** The width of the element
   * @default '10rem'
   */
  width?: string | number;
  /** Should the element take up the full width of the parent container
   * @default fullWidth
   */
  fullWidth?: boolean;
  /** The color should the animation be
   * @default 'b-000'
   */
  color?: keyof typeof colors;
  /** The color of the background
   * @default 'background'
   */
  backgroundColor?: keyof typeof colors;
  /** The border radius
   * @default 'md'
   */
  borderRadius?: string;
  /** The box shadow
   * @default 'md'
   */
  boxShadow?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <div sx={styles.skeletonCss(props)} />;
};

export default Skeleton;
