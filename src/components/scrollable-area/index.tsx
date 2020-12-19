/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { ScrollbarProps, Scrollbars } from 'react-custom-scrollbars';

export interface ScrollableAreaProps extends ScrollbarProps {
  children?: React.ReactNode;
  maxHeight?: string | number;
  ref?: React.RefObject<any>;
}

const ScrollableWrapper = React.forwardRef(
  (
    {
      autoHeightMax = 1000000,
      maxHeight,
      children,
      ...rest
    }: ScrollableAreaProps,
    ref: React.Ref<Scrollbars>
  ) => {
    return (
      <Scrollbars ref={ref} autoHeightMax={autoHeightMax} {...rest}>
        {maxHeight ? <div style={{ maxHeight }}>{children}</div> : children}
      </Scrollbars>
    );
  }
);

export const ScrollableArea = ScrollableWrapper as (
  props: ScrollableAreaProps
) => React.ReactElement;

export const scrollableRef = () => React.createRef<Scrollbars>();

export default ScrollableArea;
