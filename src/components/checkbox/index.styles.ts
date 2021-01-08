import { ThemeUIStyleObject } from 'theme-ui';

type CheckboxLabelProps = {
  checked?: boolean;
  disabled?: boolean;
};

export const checkboxWrapperCss: ThemeUIStyleObject = {
  position: 'relative',
  lineHeight: '1.125rem',
  alignItems: 'center',
};

export const checkboxInputCss: ThemeUIStyleObject = {
  visibility: 'hidden',
  width: '0 !important',
  height: '0 !important',
};

export const checkboxOuterCss: ThemeUIStyleObject = {
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  alignItems: 'center',
  pointerEvents: 'none',
};

export const checkboxCss = (props: CheckboxLabelProps): ThemeUIStyleObject => {
  const css: any = {
    cursor: 'pointer',
    boxSizing: 'border-box',
    content: '""',
    width: '1.125rem',
    height: '1.125rem',
    backgroundColor: 'white',
    borderRadius: 'md',
    border: 'solid 2px',
    borderColor: 'b-400',
    transition: 'all 300ms',
    pointerEvents: 'none',
    position: 'relative',
    '::after': {
      content: '""',
      width: '0.625rem',
      height: '0.3125rem',
      position: 'absolute',
      top: '0.25rem',
      left: '0.1875rem',
      border: '0.125rem solid',
      borderColor: 'white',
      borderTop: '0',
      borderRight: '0',
      boxSizing: 'content-box',
      opacity: '0',
      transform: 'rotate(-45deg)',
      transition: 'all 300ms',
    },
  };

  if (props.checked) {
    // @ts-ignore
    css['::after'].opacity = '1';
    css.backgroundColor = 'p-300';
    css.border = '0';
  }

  if (props.disabled) {
    css.cursor = 'not-allowed';
    css.border = '0';
    css.backgroundColor = 'b-000';
  }

  return css;
};

export const checkboxLabelCss = (children?: boolean): ThemeUIStyleObject => {
  const css: any = {
    cursor: 'pointer',
  };

  if (children) {
    css.paddingLeft = '1.625rem';
    css.width = '100%';
  } else {
    css.minWidth = '1.125rem';
    css.minHeight = '1.125rem';
  }

  return css;
};
