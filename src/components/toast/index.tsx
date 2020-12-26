/** @jsxImportSource theme-ui */

import * as React from 'react';
import * as styles from './index.styles';
import Icon from '../icon';
import { Transition } from 'react-transition-group';
import * as util from '../../utils/iconMapper.utils';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Is the notification open
   * @default true
   */
  isOpen?: boolean;
  /** content of toast */
  message?: string;
  /** title of toast */
  title?: string;
  /** time in seconds before notification is closed. Set 0 to not close automatically
   * @default 6.5
   */
  duration?: number;
  /** notification style
   * @default 'success'
   */
  color?: util.ValidationColor;
  /** which direction to slide in from
   * @default 'right'
   */
  openFrom?: 'left' | 'right' | 'none';
  /** callback function to execute once the notification closes */
  onClose?: (e: React.SyntheticEvent<HTMLDivElement, Event> | undefined) => any;
  /** callback function to execute when notification is clicked */
  onClick?: (e: React.SyntheticEvent) => any;
  /** unique key */
  key?: string;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    isOpen = true,
    message,
    title,
    color = 'success',
    onClose,
    onClick,
    duration = 6.5,
    openFrom = 'right',
    ...rest
  } = props;
  const [openState, setOpenState] = React.useState(isOpen);
  const [openTime, setOpenTime] = React.useState(Date.now());

  let timer: number;
  let toastElement: HTMLDivElement | null;

  React.useEffect(() => {
    if (toastElement)
      toastElement.style.height = toastElement.scrollHeight + 'px';
  }, [message]);

  React.useEffect(() => {
    setOpenState(isOpen);
  }, [isOpen]);

  const handleClose = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clearTimeout(timer);
    setOpenState(false);
    if (onClose) onClose(e);
  };

  const setTimer = (isMouseLeave = false) => {
    if (isMouseLeave) setOpenTime(Date.now());

    if (duration) {
      const durationMs = duration * 1000;
      const elapsed = Date.now() - openTime;
      const timeout = durationMs - elapsed;
      timer = setTimeout(handleClose, timeout);
    }
  };

  setTimer();

  return (
    <Transition appear in={openState} timeout={300} unmountOnExit>
      {(state) => (
        <div
          ref={(el) => (toastElement = el)}
          sx={{
            ...styles.toastWrapperCss({
              alertType: color,
              clickable: !!onClick,
              position: openFrom,
            }),
            ...styles.toastWrapperTransitionCss[state],
          }}
          onClick={(e) => onClick && onClick(e)}
          onMouseEnter={() => clearTimeout(timer)}
          onMouseLeave={() => setTimer(true)}
          {...rest}
        >
          <Icon
            sx={styles.toastIconCss}
            color={util.iconColorMap[color]}
            name={util.iconMap[color]}
            size="medium"
          />
          <div sx={styles.toastTitleCss({ alertType: color })}>{title}</div>
          <div sx={styles.toastMessageCss}>{message}</div>
          <Icon
            sx={styles.toastCloseIconCss}
            color="text-dark"
            name="close"
            onClick={handleClose}
            size="small"
          />
        </div>
      )}
    </Transition>
  );
};

Toast.displayName = 'Toast';

export default Toast;
