import { SxStyleProp } from 'theme-ui';
import { AccentPosition, CardSize } from '.';
import { colors } from '../theme/colors';

export type CardContainerCssProps = {
  fullWidth?: boolean;
  accentPosition?: AccentPosition;
  accentColor?: keyof typeof colors;
  hasClickHandler: boolean;
  backgroundColor?: keyof typeof colors;
  size?: CardSize;
};

const slideUpTransform = {
  transform: 'translateY(-0.5rem)',
  boxShadow: 'lg',
};

const clickTransform = {
  transform: 'translateY(-0.4rem)',
  boxShadow: 'md',
};

export const cardContainerCss = (props: CardContainerCssProps): SxStyleProp => {
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

  return css;
};

export const childrenContainerCss: SxStyleProp = {
  p: 'sm',
};
