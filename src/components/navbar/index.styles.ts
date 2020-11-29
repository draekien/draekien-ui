import { SxStyleProp } from 'theme-ui';
import { colors } from '../theme/colors';

export type NavbarWrapperCssProps = {
  backgroundColor: keyof typeof colors;
  isOpen: boolean;
  isMobile: boolean;
};

export const navbarWrapperCss = (props: NavbarWrapperCssProps): SxStyleProp => {
  const css: any = {
    height: props.isMobile ? '4rem' : '100%',
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
  };

  if (props.isOpen) {
    css.height = '75vh';
    css.borderColor = 'primary';
  }

  return css;
};

export const navbarDesktopWrapperCss: SxStyleProp = {
  p: 'sm',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const navbarMobileMenuChildrenWrapperCss: SxStyleProp = {
  width: '100%',
  height: '100%',
  px: 'sm',
};

export const navbarChildrenWrapperCss: SxStyleProp = {
  flex: 1,
  textAlign: 'right',
};
