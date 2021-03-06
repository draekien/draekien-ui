import { ThemeUIStyleObject } from 'theme-ui';
import { colors } from '../theme/colors';

export type NavbarWrapperCssProps = {
  backgroundColor: keyof typeof colors;
  isOpen: boolean;
  isMobile: boolean;
};

export const navbarWrapperCss = (
  props: NavbarWrapperCssProps
): ThemeUIStyleObject => {
  const css: any = {
    height: '4rem',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: props.backgroundColor,
    transition: 'all 500ms ease-in-out',
    borderBottom: '1px solid',
    borderColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 'topMenu',
  };

  if (props.isOpen) {
    css.height = '75vh';
    css.borderColor = 'primary';
  }

  if (!props.isMobile) {
    css.justifyContent = 'center';
  }

  return css;
};

export const navbarDesktopWrapperCss = (
  props: NavbarWrapperCssProps
): ThemeUIStyleObject => {
  const css: any = {
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  if (props.isMobile) {
    css.p = 'sm';
  } else {
    css.px = 'sm';
  }

  return css;
};

export const navbarMobileMenuChildrenWrapperCss: ThemeUIStyleObject = {
  width: '100%',
  height: '100%',
  px: 'sm',
};

export const navbarChildrenWrapperCss: ThemeUIStyleObject = {
  flex: 1,
  textAlign: 'right',
};
