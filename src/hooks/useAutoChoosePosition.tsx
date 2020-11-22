import * as React from 'react';

export type Directions = 'auto' | 'top' | 'bottom' | 'left' | 'right';
export type ChosenDirection = 'top' | 'bottom' | 'left' | 'right' | null;
export type useAutoChoosePositionProps = {
  /** set this if you want to force a direction
   * @default 'auto'
   */
  direction: Directions;
  /** the element to position around */
  element: React.RefObject<HTMLDivElement>;
  /** the element to apply the directional placement on */
  directionalElement: React.RefObject<HTMLDivElement>;
  /** is the directional element visible */
  visible: boolean;
  /** size of the directional element
   * @default 12
   */
  margin?: number;
};

export const useAutoChoosePosition = (
  props: useAutoChoosePositionProps
): ChosenDirection => {
  const {
    direction = 'auto',
    element,
    directionalElement,
    margin = 12,
    visible,
  } = props;

  const fixedPosition = direction !== 'auto' ? direction : null;
  const [position, setPosition] = React.useState(fixedPosition);

  React.useEffect(() => {
    if (!directionalElement.current || fixedPosition) return;

    const ttRect = directionalElement.current.getBoundingClientRect();
    const elRect = element.current!.getBoundingClientRect();

    let finalPosition: ChosenDirection;

    const fitsOnTop = ttRect.height + margin < elRect.top;
    const fitsOnBottom =
      ttRect.height + margin <
      document.documentElement.clientHeight - elRect.bottom;
    const topLeftFitsOnScreen =
      fitsOnTop && (ttRect.width - elRect.width) / 2 < elRect.left;
    const bottomLeftFitsOnScreen =
      fitsOnBottom && (ttRect.width - elRect.width) / 2 < elRect.left;
    const topRightFitsOnScreen =
      fitsOnTop &&
      (ttRect.width - elRect.width) / 2 <
        document.documentElement.clientWidth - elRect.right;
    const bottomRightFitsOnScreen =
      fitsOnBottom &&
      (ttRect.width - elRect.width) / 2 <
        document.documentElement.clientWidth - elRect.right;

    if (topLeftFitsOnScreen && topRightFitsOnScreen) {
      finalPosition = 'top';
    } else if (bottomLeftFitsOnScreen && bottomRightFitsOnScreen) {
      finalPosition = 'bottom';
    } else if (topLeftFitsOnScreen && bottomLeftFitsOnScreen) {
      finalPosition = 'left';
    } else if (topRightFitsOnScreen && bottomRightFitsOnScreen) {
      finalPosition = 'right';
    } else {
      finalPosition = 'bottom';
    }

    setPosition(finalPosition);
  }, [visible]);

  return position;
};
