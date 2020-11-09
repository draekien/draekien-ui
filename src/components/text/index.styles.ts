import { SxStyleProp } from 'theme-ui';
import { colors } from '../theme/colors';

export type TextCssProps = {
  color: keyof typeof colors;
  fullWidth: boolean;
  align: 'left' | 'right' | 'center';
  margin?: string | string[];
  truncate: boolean;
};

export const textCss = (props: TextCssProps): SxStyleProp => {
  const css: any = {
    color: props.color,
    display: props.fullWidth ? 'block' : 'inline-block',
    textAlign: props.align,
    margin: props.margin,
  };

  if (props.truncate) {
    css.overflow = 'hidden';
    css.textOverflow = 'ellipsis';
    css.whiteSpace = 'nowrap';
    css.display = 'inline-block';
    css.maxWidth = '100%';
  }

  return css;
};
