import { keyframes } from '@emotion/react';
import { ThemeUIStyleObject } from '@theme-ui/core';
import { colors } from '../theme/colors';

export interface SkeletonCssProps {
  height?: string | number;
  width?: string | number;
  fullWidth?: boolean;
  color?: keyof typeof colors;
  backgroundColor?: keyof typeof colors;
  borderRadius?: string;
  boxShadow?: string;
}

const load = keyframes`
from {
  left: -75%;
}
to {
  left: 100%;
}
`;

export const skeletonCss = (props: SkeletonCssProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    height: props.height ?? '1rem',
    width: props.width ?? '10rem',
    my: 'xxs',
    boxShadow: props.boxShadow ?? 'md',
    borderRadius: props.borderRadius ?? 'md',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: props.backgroundColor ?? 'b-100',
    '::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '-75%',
      top: 0,
      height: '100%',
      width: '75%',
      background: `linear-gradient(to right, transparent 0%, ${
        colors[props.color ?? 'b-000']
      } 50%, transparent 100%)`,
      animation: `${load} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite`,
    },
  };

  if (props.fullWidth) {
    css.width = '100%';
  }

  return css;
};
