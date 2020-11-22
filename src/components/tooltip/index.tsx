/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { useAutoChoosePosition } from '../../hooks';

const MARGIN = 12;
const DELAY = 400;

export type TooltipDirection = 'auto' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** the text to display as the tooltip */
  text: React.ReactNode;
  /** the element the tooltip is for.
   * This is the element that will show the tooltip when hovered or focused
   */
  children: any;
  /** The direction to display the tooltip
   * @default 'auto'
   */
  direction?: TooltipDirection;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  direction = 'auto',
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
}) => {
  const fixedDirection = direction !== 'auto' ? direction : null;

  const [tooltipDirection, setTooltipDirection] = React.useState(
    fixedDirection
  );
  const [visible, setVisible] = React.useState(false);

  let timer: ReturnType<typeof setTimeout>;

  const handleOnFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    timer = setTimeout(() => {
      setVisible(true);
    }, DELAY);

    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    clearTimeout(timer);
    setVisible(false);

    !fixedDirection && setTooltipDirection(null);

    onBlur && onBlur(e);
  };

  const handleOnMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    timer = setTimeout(() => {
      setVisible(true);
    }, DELAY);

    onMouseEnter && onMouseEnter(e);
  };

  const handleOnMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clearTimeout(timer);
    setVisible(false);

    !fixedDirection && setTooltipDirection(null);

    onMouseLeave && onMouseLeave(e);
  };

  const handleOnMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clearTimeout(timer);
    setVisible(false);

    !fixedDirection && setTooltipDirection(null);

    onMouseDown && onMouseDown(e);
  };

  const element = React.createRef<HTMLDivElement>();
  const tooltip = React.createRef<HTMLDivElement>();

  const calculatedDirection = useAutoChoosePosition({
    direction,
    element,
    directionalElement: tooltip,
    margin: MARGIN,
    visible,
  });

  React.useEffect(() => {
    setTooltipDirection(calculatedDirection);
  }, [calculatedDirection, visible]);

  return (
    <Box
      sx={styles.tooltipWrapperCss}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onMouseDown={handleOnMouseDown}
      tabIndex={1}
      ref={element}
    >
      {visible && (
        <Box sx={styles.tooltipCss({ tooltipDirection })} ref={tooltip}>
          <Box sx={styles.tooltipArrowCss({ tooltipDirection })} />
          {text}
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Tooltip;
