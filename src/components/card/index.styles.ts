import { SxStyleProp } from 'theme-ui';
import { CardSize } from '.';
import { colors } from '../theme/colors';

export type CardContainerCssProps = {
  fullWidth?: boolean;
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
      css.maxWidth = '10rem';
      break;
    case 'medium':
      css.maxWidth = '20rem';
      break;
    case 'large':
      css.maxWidth = '40rem';
      break;
  }

  if (props.fullWidth) {
    css.width = '100%';
  }

  return css;
};

export const childrenContainerCss: SxStyleProp = {
  p: 'sm',
};
