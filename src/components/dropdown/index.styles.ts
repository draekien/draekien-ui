import { SxStyleProp } from 'theme-ui';

export const outsideClickWrapper = (
  minWidth?: number | string | number[] | string[]
): SxStyleProp => ({
  display: 'inline-block',
  minWidth: minWidth || 'auto',
  '>div': {
    width: minWidth || 'auto',
  },
});

export const contentWrapper = (hasSelection?: boolean): SxStyleProp => {
  const css: any = {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
  };

  if (hasSelection) {
    css['button'] = { color: 's-400' };
  }

  return css;
};

interface ChildrenWrapperCssProps {
  margin: number;
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | null
    | undefined;
  maxHeight?: string | number | string[] | number[];
}

export const childrenWrapperCss = (
  props: ChildrenWrapperCssProps
): SxStyleProp => {
  const css: any = {
    backgroundColor: 'b-000',
    borderRadius: 'md',
    boxShadow: 'sm',
    minWidth: '100%',
    paddingLeft: 0,
    position: 'absolute',
    visibility: 'hidden',
    zIndex: 'dropdown',
  };

  if (props.position) {
    if (props.position.includes('top'))
      css.transform = 'translateY(-100%) translateY(-4px)';
    if (props.position.includes('bottom')) css.marginTop = `${props.margin}px`;
    if (props.position.includes('right')) css.right = '0';
    css.visibility = 'visible';
  }

  if (props.maxHeight) {
    css.maxHeight = props.maxHeight;
    css.overflowY = 'auto';
  }

  return css;
};

interface CaretCssProps {
  isOpen: boolean;
  margin: number;
}

export const caretCss = (props: CaretCssProps): SxStyleProp => {
  const css: any = {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '0.5rem',
    verticalAlign: 'middle',
    borderRight: '4px solid transparent',
    borderLeft: '4px solid transparent',
    ...(props.isOpen
      ? { borderBottom: `${props.margin}px solid` }
      : { borderTop: `${props.margin}px solid` }),
  };

  return css;
};
