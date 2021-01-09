import { ThemeUIStyleObject } from 'theme-ui';
import { AccentPosition, CardSize } from '.';
import { colors } from '../theme/colors';
import { alpha } from '@theme-ui/color';

export type CardContainerCssProps = {
  fullWidth?: boolean;
  accentPosition?: AccentPosition;
  accentColor?: keyof typeof colors;
  hasClickHandler: boolean;
  backgroundColor?: keyof typeof colors;
  size?: CardSize;
  frosted?: boolean;
  gradient?: boolean;
};

const slideUpTransform = {
  transform: 'translateY(-0.5rem)',
  boxShadow: 'lg',
};

const clickTransform = {
  transform: 'translateY(-0.4rem)',
  boxShadow: 'md',
};

export const cardContainerCss = (
  props: CardContainerCssProps
): ThemeUIStyleObject => {
  const css: any = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    boxShadow: 'md',
    borderRadius: 'md',
    overflow: 'hidden',
  };

  if (props.backgroundColor) {
    css.backgroundColor = props.backgroundColor;
  }

  if (props.hasClickHandler) {
    css.transition = 'all 100ms';
    css.marginTop = '0.5rem';
    css.cursor = 'pointer';
    css[':hover'] = slideUpTransform;
    css[':focus'] = slideUpTransform;
    css[':active'] = clickTransform;
  }

  switch (props.size) {
    case 'small':
      css.width = '10rem';
      break;
    case 'medium':
      css.width = '20rem';
      break;
    case 'large':
      css.width = '40rem';
      break;
  }

  if (props.fullWidth) {
    css.width = '100%';
  }

  if (props.accentPosition === 'left') {
    css.borderLeft = '5px solid';
    css.borderLeftColor = props.accentColor;
  }

  if (props.accentPosition === 'top') {
    css.borderTop = '5px solid';
    css.borderTopColor = props.accentColor;
  }

  if (props.frosted) {
    css.backdropFilter = 'blur(7.5px)';
    css.backgroundColor = (t: any) => `${alpha('white', 0.35)(t)}`;
  }

  if (props.gradient) {
    css.backgroundImage = (t: any) =>
      `linear-gradient(80deg, ${alpha(
        colors.primary,
        props.frosted ? 0.35 : 1
      )(t)}, ${alpha(colors.secondary, props.frosted ? 0.35 : 1)(t)})`;
  }

  return css;
};

export const childrenContainerCss: ThemeUIStyleObject = {
  p: 'sm',
};
