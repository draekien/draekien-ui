import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from 'theme-ui';
import { DividerProps } from '.';
import { colors } from '../theme/colors';

export const dividerCss = (props: DividerProps): ThemeUIStyleObject => {
  const css: any = {
    border: '1px solid',
    borderColor: props.color,
  };

  if (props.variant === 'gradient') {
    css.border = 'none';
    css.height = 2;
    css.backgroundImage = (t: any) =>
      `linear-gradient(${
        props.orientation === 'horizontal' ? '90deg' : '0deg'
      }, ${alpha(colors.primary, 1)(t)}, ${alpha(colors.secondary, 1)(t)})`;
  }

  if (props.orientation === 'horizontal') {
    if (props.size === 'sm') {
      css.width = '20rem';
    } else if (props.size === 'md') {
      css.width = '40rem';
    } else if (props.size === 'lg') {
      css.width = '60rem';
    }

    if (props.fullWidth) {
      css.width = '100%';
    }
  } else if (props.orientation === 'vertical') {
    css.width = props.variant === 'gradient' ? 2 : 0;

    if (props.size === 'sm') {
      css.height = '20rem';
    } else if (props.size === 'md') {
      css.height = '40rem';
    } else if (props.size === 'lg') {
      css.height = '60rem';
    }

    if (props.fullWidth) {
      css.height = '100%';
    }
  }

  return css;
};
