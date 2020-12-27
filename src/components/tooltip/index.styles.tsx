import { ThemeUIStyleObject } from 'theme-ui';
import { TooltipDirection } from '.';

interface TooltipProps {
  tooltipDirection?: TooltipDirection | null;
}

export const tooltipWrapperCss: ThemeUIStyleObject = {
  display: 'inline-block',
  position: 'relative',
};

export const tooltipCss = (props: TooltipProps): ThemeUIStyleObject => {
  const css: any = {
    position: 'absolute',
    padding: '0.375rem 0.5rem',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'p-500',
    borderRadius: 'md',
    variant: 'text.small',
    width: 'max-content',
    maxWidth: '20rem',
    visibility: 'hidden',
  };

  if (props.tooltipDirection === 'top') {
    css.marginBottom = '0.5rem';
    css.bottom = '100%';
    css.left = '50%';
    css.transform = 'translateX(-50%)';
    css.visibility = 'visible';
  }

  if (props.tooltipDirection === 'bottom') {
    css.marginTop = '0.5rem';
    css.top = '100%';
    css.left = '50%';
    css.transform = 'translateX(-50%)';
    css.visibility = 'visible';
  }

  if (props.tooltipDirection === 'left') {
    css.marginRight = '0.5rem';
    css.right = '100%';
    css.top = '50%';
    css.transform = 'translateY(-50%)';
    css.visibility = 'visible';
  }

  if (props.tooltipDirection === 'right') {
    css.marginLeft = '0.5rem';
    css.left = '100%';
    css.top = '50%';
    css.transform = 'translateY(-50%)';
    css.visibility = 'visible';
  }

  return css;
};

export const tooltipArrowCss = (props: TooltipProps): ThemeUIStyleObject => {
  const css: any = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderColor: 'transparent',
    borderStyle: 'solid',
  };

  if (props.tooltipDirection === 'top') {
    css.left = '50%';
    css.bottom = '-0.25rem';
    css.marginLeft = '-0.25rem';
    css.borderWidth = '0.25rem 0.25rem 0';
    css.borderTopColor = 'p-500';
  }

  if (props.tooltipDirection === 'bottom') {
    css.left = '50%';
    css.top = '-0.25rem';
    css.marginLeft = '-0.25rem';
    css.borderWidth = '0 0.25rem 0.25rem';
    css.borderBottomColor = 'p-500';
  }

  if (props.tooltipDirection === 'left') {
    css.top = '50%';
    css.left = '100%';
    css.marginTop = '-0.25rem';
    css.borderWidth = '0.25rem 0 0.25rem 0.25rem';
    css.borderLeftColor = 'p-500';
  }

  if (props.tooltipDirection === 'right') {
    css.top = '50%';
    css.right = '100%';
    css.marginTop = '-0.25rem';
    css.borderWidth = '0.25rem 0.25rem 0.25rem 0';
    css.borderRightColor = 'p-500';
  }

  return css;
};
