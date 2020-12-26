import { ThemeUIStyleObject } from 'theme-ui';
import { IconSize } from '.';
import { colors } from '../theme/colors';

export type IconCssProps = {
  size: IconSize;
  color?: keyof typeof colors;
};

export const iconCss = (props: IconCssProps): ThemeUIStyleObject => {
  const css: any = {
    verticalAlign: 'middle',
    color: props.color || 'inherit',
  };

  switch (props.size) {
    case 'small':
      css.fontSize = '1rem';
      break;
    case 'medium':
      css.fontSize = '1.5rem';
      break;
    case 'large':
      css.fontSize = '2rem';
      break;
  }

  return css;
};
