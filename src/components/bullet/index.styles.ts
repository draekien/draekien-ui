import { SxStyleProp } from 'theme-ui';
import { ValidationColor } from '../../utils/iconMapper.utils';

export type BulletCssProps = {
  color: ValidationColor | 'muted' | 'primary' | 'secondary';
  fullWidth: boolean;
  invert: boolean;
};

export const bulletCss = (props: BulletCssProps): SxStyleProp => {
  const css: any = {
    borderRadius: 'sm',
    display: props.fullWidth ? 'flex' : 'inline-flex',
    p: '0 0.25rem',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    height: '1rem',
    variant: 'text.eyebrow',
    whiteSpace: 'nowrap',
    color: props.invert ? 'text-white' : props.color,
    backgroundColor: props.invert ? props.color : `${props.color}-light`,
  };

  if (['primary', 'secondary'].includes(props.color)) {
    css.color = props.invert ? 'text-white' : `${props.color.charAt(0)}-400`;
    css.backgroundColor = props.invert
      ? `${props.color.charAt(0)}-400`
      : `${props.color.charAt(0)}-000`;
  }

  if (props.color === 'muted') {
    css.color = props.invert ? 'text-white' : 'b-300';
    css.backgroundColor = props.invert ? 'b-300' : 'muted';
  }

  return css;
};
