import { SxStyleProp } from 'theme-ui';
import { BannerVariant } from '.';

export type BannerContainerCssProps = {
  variant: BannerVariant;
  width?: string | number;
  isVisible: boolean;
};

export const bannerContainerCss = (
  props: BannerContainerCssProps
): SxStyleProp => {
  const css: any = {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: props.width || '100%',
    backgroundColor: `${props.variant}-000`,
    borderLeft: '3px solid',
    borderLeftColor: `${props.variant}-400`,
    borderRadius: 'md',
    boxShadow: 'md',
    py: 'xs',
    marginTop: 'sm',
    opacity: 1,
    transition: 'all 300ms',
  };

  if (!props.isVisible) {
    css.opacity = 0;
    css.height = '0 !important';
    css.marginTop = 0;
    css.overflow = 'hidden';
  }

  return css;
};

export const bannerIconCss: SxStyleProp = {
  mx: 'sm',
};

export const bannerMessageCss: SxStyleProp = {
  px: 'sm',
  flex: 1,
  alignItems: 'center',
};

export const bannerCloseIconCss: SxStyleProp = {
  cursor: 'pointer',
  mr: 'sm',
};
