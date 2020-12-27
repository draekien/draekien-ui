import { ThemeUIStyleObject } from 'theme-ui';
import { TextAreaProps } from '.';

export const textareaWrapperCss = (
  props: TextAreaProps
): ThemeUIStyleObject => {
  const css: any = {};

  if (props.fullWidth) {
    css.display = 'block';
    css.width = '100%';
  } else {
    css.display = 'inline-block';
    css.width = '15rem';
  }

  return css;
};

export const textareaCss = (props: TextAreaProps): ThemeUIStyleObject => {
  const css: any = {
    padding: '0.6875rem 0.5rem',
    color: 'text-dark',
    border: '1px solid',
    borderColor: 'b-100',
    borderRadius: 'md',
    fontFamily: 'Montserrat, sans-serif',
    variant: 'text.medium',
    width: '100%',
    transition: 'all 300ms',
    resize: 'none',
    ':disabled': {
      backgroundColor: 'b-200',
      color: 'b-300',
      cursor: 'not-allowed',
    },
    ':focus': {
      borderColor: 'p-300',
    },
    ':not(:disabled):not(:focus):hover': {
      borderColor: 'b-200',
    },
    '::placeholder': {
      color: 'b-000',
    },
  };

  if (props.variant) css.borderColor = props.variant;

  return css;
};
