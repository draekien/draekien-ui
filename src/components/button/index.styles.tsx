import { SxStyleProp } from 'theme-ui';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonCssProps = {
  variant: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  active?: boolean;
};

const getColors = (variant: ButtonVariant) => {
  if (variant === 'secondary') {
    return {
      background: 'secondary',
      border: 'secondary',
      color: 'text-white',
      hoverBackground: 'secondary-hover',
      hoverBorder: 'secondary-hover',
      hoverColor: 'text-white',
      activeBackground: 'secondary-active',
      activeBorder: 'secondary-border',
      activeColor: 'text-white',
    };
  }

  if (variant === 'outline') {
    return {
      background: 'transparent',
      border: 'primary',
      color: 'primary',
      hoverBackground: 'transparent',
      hoverBorder: 'primary-hover',
      hoverColor: 'primary-hover',
      activeBackground: 'transparent',
      activeBorder: 'primary-active',
      activeColor: 'primary-active',
    };
  }

  if (variant === 'text') {
    return {
      background: 'transparent',
      border: 'transparent',
      color: 'primary',
      hoverBackground: 'transparent',
      hoverBorder: 'transparent',
      hoverColor: 'primary-hover',
      activeBackground: 'transparent',
      activeBorder: 'transparent',
      activeColor: 'primary-active',
    };
  }

  return {
    background: 'primary',
    border: 'primary',
    color: 'text-white',
    hoverBackground: 'primary-hover',
    hoverBorder: 'primary-hover',
    hoverColor: 'text-white',
    activeBackground: 'primary-active',
    activeBorder: 'primary-border',
    activeColor: 'text-white',
  };
};

export const buttonCss = (props: ButtonCssProps): SxStyleProp => {
  const css: any = {
    py: 'xs',
    px: props.size || 'md',
    cursor: 'pointer',
    variant: 'text.subtitle',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'all 300ms',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    textDecoration: 'none',
    border: '0.0625rem solid',
  };

  if (props.variant === 'text') {
    css.p = 0;
  }

  if (props.fullWidth) {
    css.width = '100%';
    css.display = 'flex';
  }

  if (!props.disabled) {
    const colors = getColors(props.variant);
    css.backgroundColor = colors.background;
    css.borderColor = colors.border;
    css.color = colors.color;
    css[':hover'] = {
      backgroundColor: colors.hoverBackground,
      borderColor: colors.hoverBorder,
      color: colors.hoverColor,
    };
    css[':active'] = {
      backgroundColor: colors.activeBackground,
      borderColor: colors.activeBorder,
      color: colors.activeColor,
    };
    if (props.active) {
      css.backgroundColor = colors.activeBackground;
      css.borderColor = colors.activeBorder;
      css.color = colors.activeColor;
    }
  }

  if (props.disabled) {
    css.backgroundColor = 'muted';
    css.borderColor = 'muted';
    css.color = 'text-white';
    css.cursor = 'not-allowed';
  }

  return css;
};
