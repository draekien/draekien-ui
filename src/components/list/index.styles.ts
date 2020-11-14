import { SxStyleProp } from 'theme-ui';

export const listWrapperCss: SxStyleProp = {
  flexDirection: 'column',
};

export const labelCss: SxStyleProp = {
  ml: 'sm',
};

export const listCss = {
  p: '0.25rem 0',
  margin: 0,
};

export const listItemCss = (
  disabled: boolean,
  focused: boolean
): SxStyleProp => {
  const css = {
    backgroundColor: 'b-000',
    color: disabled ? 'b-200' : 'b-400',
    cursor: disabled ? 'not-allowed' : 'pointer',
    listStyle: 'none',
    px: 'sm',
    py: 'xs',
    whiteSpace: 'nowrap',
    transition: 'all 300ms',
    ':hover': {
      backgroundColor: disabled ? 'inherit' : 'b-100',
    },
  };

  if (focused) {
    css.backgroundColor = 'b-100';
    css.color = 'b-600';
  }

  return css;
};
