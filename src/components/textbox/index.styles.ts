import { ThemeUIStyleObject } from 'theme-ui';
import { TextBoxProps } from '.';

export const textboxWrapperCss: ThemeUIStyleObject = {
  position: 'relative',
  display: 'inline-flex',
  width: '100%',
  alignItems: 'center',
};

export const inputLeftIconCss: ThemeUIStyleObject = {
  position: 'absolute',
  left: 'xs',
  color: 'b-300',
};

interface InputCssProps extends TextBoxProps {
  withIcon?: boolean;
  withStatus?: boolean;
}

export const inputCss = (props: InputCssProps): ThemeUIStyleObject => {
  const css: any = {
    height: props.size === 'small' ? '2rem' : '2.5rem',
    p: '0 1rem 0 0.5rem',
    color: 'b-600',
    border: '1px solid',
    borderColor: 'b-100',
    borderRadius: 'md',
    backgroundColor: 'white',
    fontFamily: 'Montserrat, sans-serif',
    variant: 'text.medium',
    width: '100%',
    transition: 'all 300ms',
    '::-ms-clear': {
      display: 'none',
    },
    ':disabled': {
      backgroundColor: 'b-200',
      color: 'b-300',
      cursor: 'not-allowed',
    },
    ':focus': {
      borderColor: 'p-300',
      '+ i, + span, + div > i': {
        transition: 'all 300ms',
        color: 'p-300',
      },
    },
    ':not(:disabled):not(:focus):hover': {
      borderColor: 'b-200',
      '+ i, + span, + div > i': {
        transition: 'all 300ms',
        color: 'p-400',
      },
    },
    '::placeholder': {
      color: 'b-300',
    },
  };

  if (props.withIcon) css.pl = 'lg';
  if (props.withStatus) css.pr = 'lg';
  if (props.variant) css.borderColor = props.variant;
  if (props.active) {
    css.borderColor = 'p-300';
    css['+ i, + span, + div > i'] = {
      color: 'p-300',
    };
  }

  return css;
};

export const textboxTailCss = (props: TextBoxProps): ThemeUIStyleObject => {
  const css: any = {
    display: 'inline',
    position: 'absolute',
    right: 'xs',
    top: 'xs',
    '> *': {
      color: 'b-300',
      cursor: 'pointer',
      userSelect: 'none',
      background: '0',
      border: '0',
      ':hover': {
        color: 'b-400',
      },
      ':active': {
        color: 'b-500',
      },
    },
  };

  if (props.disabled) {
    css.color = 'b-300';
    css.cursor = 'not-allowed';
  }

  return css;
};
