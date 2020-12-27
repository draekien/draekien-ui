import { ThemeUIStyleObject } from 'theme-ui';
import { colors } from '../theme/colors';

export type BadgePosition = {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
};

export const badgeCss = (
  color?: keyof typeof colors | string,
  position?: BadgePosition
): ThemeUIStyleObject => ({
  position: 'absolute',
  borderRadius: 'max',
  height: '1rem',
  width: '1rem',
  color: 'white',
  backgroundColor: color || 'primary',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  variant: 'text.caption',
  padding: '0 0.25rem',
  ...(position?.top !== undefined ? { top: position.top } : undefined),
  ...(position?.right !== undefined ? { right: position.right } : undefined),
  ...(position?.bottom !== undefined ? { bottom: position.bottom } : undefined),
  ...(position?.left !== undefined ? { left: position.left } : undefined),
});
