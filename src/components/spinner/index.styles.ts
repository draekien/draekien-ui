import { ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { SpinnerProps } from '.';

export const overlayCss: ThemeUIStyleObject = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'overlay',
  zIndex: 'overlay',
  alignItems: 'center',
  justifyContent: 'center',
};

export const spinnerCss: ThemeUIStyleObject = {
  display: 'inline-flex',
  '> div:nth-of-type(1)': {
    animationDelay: '0',
    marginLeft: '0',
  },
  '> div:nth-of-type(2)': {
    animationDelay: '0.09s',
  },
  '> div:nth-of-type(3)': {
    animationDelay: '0.18s',
  },
};

const loadingBars = keyframes`
0% {
  transform: scale(1);
}

20% {
  transform: scale(1, 2);
}

40% {
  transform: scale(1);
}`;

export const spinnerBarCss = (props: SpinnerProps): ThemeUIStyleObject => {
  const css: any = {
    animation: `${loadingBars} 1s ease-in-out infinite`,
    backgroundColor: 'primary',
    borderRadius: 'md',
    display: 'inline-flex',
    ml: '0.125rem',
  };

  if (props.size === 'small') {
    css.height = '0.625rem';
    css.width = '0.125rem';
  }
  if (props.size === 'medium') {
    css.height = '1.125rem';
    css.width = '0.25rem';
  }
  if (props.size === 'large') {
    css.height = '1.625rem';
    css.width = '0.375rem';
  }
  if (props.color) css.backgroundColor = props.color;

  return css;
};

const loadingDots = keyframes`
0% {
  transform: translateY(0);
}

20% {
  transform: translateY(-75%);
}

40% {
  transform: translateY(0);
}`;

export const spinnerDotCss = (props: SpinnerProps): ThemeUIStyleObject => {
  const css: any = {
    animation: `${loadingDots} 1s ease-in-out infinite`,
    borderRadius: '50%',
    display: 'inline-flex',
    margin: '0.25rem',
    ':nth-of-type(1)': { backgroundColor: 'primary' },
    ':nth-of-type(2)': { backgroundColor: 'primary-hover' },
    ':nth-of-type(3)': { backgroundColor: 'primary-hover' },
  };

  if (props.size === 'small') {
    css.height = '0.5rem';
    css.width = '0.5rem';
  }
  if (props.size === 'medium') {
    css.height = '0.75rem';
    css.width = '0.75rem';
  }
  if (props.size === 'large') {
    css.height = '1rem';
    css.width = '1rem';
  }

  return css;
};

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const spinnerCircleCss: ThemeUIStyleObject = {
  animation: `${spin} 1s linear infinite`,
  transformOrigin: '50% 50%',
};

export const spinnerCircleWrapperCss = (
  props: SpinnerProps
): ThemeUIStyleObject => {
  const css: any = {
    color: props.color ?? 'primary',
    display: 'inline-flex',
    overflow: 'visible',
  };

  if (props.size === 'small') {
    css.height = '1rem';
    css.width = '1rem';
  }
  if (props.size === 'medium') {
    css.height = '1.5rem';
    css.width = '1.5rem';
  }
  if (props.size === 'large') {
    css.height = '2rem';
    css.width = '2rem';
  }

  return css;
};
