import { SxStyleProp } from 'theme-ui';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonCssProps = {
  variant: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  isCircle?: boolean;
  icon?: boolean;
  children?: boolean;
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
      activeBorder: 'secondary-active',
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
    activeBorder: 'primary-active',
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

  if (props.icon && !props.isCircle) {
    css.px = props.size === 'lg' ? '0.75rem' : '0.5rem';
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

  if (props.isCircle) {
    const circleSize = props.size === 'sm' ? '2rem' : '2.5rem';
    css.borderRadius = '50%';
    css.height = circleSize;
    css.width = circleSize;
    css.p = 0;
    css.border = 'none';
    css.boxShadow = 'small';
    css.color = 'text-white';
    css.backgroundColor = 'primary';
  }

  if (props.disabled) {
    css.backgroundColor = 'muted';
    css.borderColor = 'muted';
    css.color = 'text-white';
    css.cursor = 'not-allowed';
  }

  return css;
};

export const linkButtonCss = (active: boolean): SxStyleProp => {
  const css: any = {
    cursor: 'pointer',
    variant: 'text.subtitle',
    transition: 'all 300ms',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 0,
    color: 'primary',
    height: 'auto',
    width: 'auto',
    padding: 0,
    ':hover': {
      span: {
        transition: 'all 300ms',
        color: 'primary-hover',
        textDecoration: 'underline',
      },
    },
    ':active': {
      span: {
        transition: 'all 300ms',
        color: 'primary-active',
        textDecoration: 'underline',
      },
    },
    ':disabled': {
      cursor: 'not-allowed',
      span: {
        transition: 'all 300ms',
        color: 'muted',
        textDecoration: 'none',
      },
    },
  };

  if (active) {
    css.span = {
      transition: 'all 300ms',
      color: 'primary-active',
      textDecoration: 'underline',
    };
  }

  return css;
};

export const iconWrapperCss = (
  position: 'left' | 'right',
  hasText: boolean
): SxStyleProp => {
  const css: any = {
    display: 'inline-flex',
    textDecoration: 'none',
  };

  if (hasText) {
    if (position === 'left') {
      css.marginRight = 'xxs';
    }
    if (position === 'right') {
      css.marginLeft = 'xxs';
    }
  } else {
    css['i'] = {
      fontSize: '1.5rem',
    };
  }

  return css;
};
