import { ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { colors as themeColors } from '../theme/colors';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'text'
  | 'gradient'
  | 'feature';
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
      color: 'white',
      hoverBackground: 'secondary-hover',
      hoverBorder: 'secondary-hover',
      hoverColor: 'white',
      activeBackground: 'secondary-active',
      activeBorder: 'secondary-active',
      activeColor: 'white',
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
    color: 'white',
    hoverBackground: 'primary-hover',
    hoverBorder: 'primary-hover',
    hoverColor: 'white',
    activeBackground: 'primary-active',
    activeBorder: 'primary-active',
    activeColor: 'white',
  };
};

export const buttonCss = (props: ButtonCssProps): ThemeUIStyleObject => {
  const css: any = {
    height: '2rem',
    py: 'xs',
    px: props.size || 'md',
    border: '0.0625rem solid',
    borderRadius: 'md',
    cursor: 'pointer',
    variant: 'text.subtitle',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'all 300ms',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  };

  if (props.fullWidth) {
    css.width = '100%';
    css.display = 'flex';
  }

  if (props.size === 'lg') {
    css.height = '2.5rem';
  }

  if (props.icon && !props.isCircle) {
    css.px = props.size === 'lg' ? '0.75rem' : '0.5rem';
  }

  if (!props.disabled) {
    const colors = getColors(props.variant);
    css.backgroundColor = colors.background;
    css.borderColor = colors.border;
    css.color = colors.color;
    css.span = {
      color: colors.color,
    };
    css[':hover'] = {
      backgroundColor: colors.hoverBackground,
      borderColor: colors.hoverBorder,
      span: {
        color: colors.hoverColor,
      },
    };
    css[':active'] = {
      backgroundColor: colors.activeBackground,
      borderColor: colors.activeBorder,
      span: {
        color: colors.activeColor,
      },
    };

    if (props.variant === 'text') {
      css.p = '0 !important';
    }

    if (props.variant === 'outline') {
      css.border = '0.1rem solid !important';
      css.borderColor = 'primary';
      css.color = `${themeColors.primary} !important`;
    }

    if (props.active) {
      css.backgroundColor = colors.activeBackground;
      css.borderColor = colors.activeBorder;
      css.span = {
        color: colors.activeColor,
      };
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
    css.color = 'white';
    css.backgroundColor = 'primary';
  }

  if (props.variant === 'gradient' || props.variant === 'feature') {
    css.backgroundImage = (t: any) =>
      `linear-gradient(90deg, ${alpha(themeColors.primary, 1)(t)}, ${alpha(
        themeColors.secondary,
        1
      )(t)})`;
    css.position = 'relative';
    css.zIndex = 1;
    css['::before'] = {
      position: 'absolute',
      content: '""',
      borderRadius: 'md',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundImage: (t: any) =>
        `linear-gradient(-90deg, ${alpha(themeColors.primary, 1)(t)}, ${alpha(
          themeColors.secondary,
          1
        )(t)})`,
      transition: 'opacity 0.25s ease-in-out',
      opacity: 0,
      zIndex: -1,
    };
    css[':hover::before'] = {
      opacity: 1,
    };

    if (props.variant === 'feature') {
      css.fontWeight = 'normal';
      css.letterSpacing = '0.3rem';
      css.textTransform = 'uppercase';

      if (props.size === 'md') {
        css.pl = '2rem !important';
        css.pr = '2rem !important';
      }

      if (props.size === 'lg') {
        css.pl = '4rem !important';
        css.pr = '4rem !important';
      }
    }
  }

  if (props.disabled) {
    css.backgroundImage = 'none';
    css.backgroundColor = 'muted';
    css.borderColor = 'muted';
    css.color = 'white';
    css.cursor = 'not-allowed';
    css[':hover::before'] = {
      backgroundImage: 'none',
    };
  }

  return css;
};

export const linkButtonCss = (active: boolean): ThemeUIStyleObject => {
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
    span: {
      color: 'primary',
    },
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
): ThemeUIStyleObject => {
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
