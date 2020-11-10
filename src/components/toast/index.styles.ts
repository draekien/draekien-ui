import { SxStyleProp } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { ValidationColor } from '.';
import { ToastContainerProps } from './container';

const slideLeft = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0);
}`;

const slideRight = keyframes`
0% {
  transform: translateX(-100%)
}
100% {
  transform: translateX(0)
}`;

export type ToastCssProps = {
  /** type of alert */
  alertType: ValidationColor;
  /** is the alert clickable */
  clickable?: boolean;
  /** which direction to slide in from */
  position?: 'left' | 'right' | 'none';
};

export const toastContainerCss = (props: ToastContainerProps): SxStyleProp => ({
  position: 'fixed',
  top: props.offsetTop || 0,
  right: 0,
  bottom: 0,
  zIndex: 'toast',
  pointerEvents: 'none',
});

export const toastWrapperCss = (props: ToastCssProps): SxStyleProp => {
  const css: any = {
    backgroundColor: `${props.alertType}-light`,
    borderRadius: 'md',
    boxShadow: 'md',
    margin: '0 2rem',
    marginTop: '2rem', // explicitly required for close animation
    opacity: '0',
    pointerEvents: 'all',
    position: 'relative',
    transition: 'all 300ms',
    width: '20rem',
    zIndex: 'toast',
  };

  if (props.clickable) css.cursor = 'pointer';
  if (props.position === 'left') {
    css.left = '0';
    css.animation = `${slideLeft} 500ms`;
  }
  if (props.position === 'right') {
    css.right = '0';
    css.animation = `${slideRight} 500ms`;
  }

  return css;
};

export const toastWrapperTransitionCss: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {
    opacity: 0,
    height: '0 !important',
    marginTop: 0,
    overflow: 'hidden',
  },
  exited: {
    opacity: 0,
    height: '0 !important',
    marginTop: 0,
    overflow: 'hidden',
  },
};

export const toastIconCss: SxStyleProp = {
  mx: 'sm',
  my: '1.375rem',
  position: 'absolute',
};

export const toastTitleCss = (props: ToastCssProps): SxStyleProp => ({
  color: props.alertType,
  minHeight: '2rem',
  p: '1rem 2.5rem 0 3.5rem',
  variant: 'text.surtitle',
});

export const toastMessageCss: SxStyleProp = {
  minHeight: '2rem',
  p: '0 2.5rem 1rem 3.5rem',
  variant: 'text.small',
  color: 'text-dark',
};

export const toastCloseIconCss: SxStyleProp = {
  position: 'absolute',
  right: '0.75rem',
  top: '0.74rem',
  cursor: 'pointer',
};
