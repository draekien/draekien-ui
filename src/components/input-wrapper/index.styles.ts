import { SxStyleProp } from 'theme-ui';
import { InputWrapperProps } from '.';

export const inputWrapperCss = (props: InputWrapperProps): SxStyleProp => {
  const { fullWidth } = props;
  return {
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : '15rem',
  };
};

export const helpTextCss: SxStyleProp = {
  mt: 'xs',
};

export const labelCss = {
  display: 'inline-block',
  mb: '0.25rem',
};
