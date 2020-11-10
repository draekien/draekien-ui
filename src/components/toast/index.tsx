/** @jsxRuntime classic @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import Icon from '../icon';
import Text from '../text';
import { Transition } from 'react-transition-group';

export type ValidationColor = 'information' | 'success' | 'warning' | 'error';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  message?: string;
  title?: string;
  duration?: number;
  color?: ValidationColor;
  openFrom?: 'left' | 'right' | 'none';
  onClose?: (e: React.SyntheticEvent<HTMLDivElement, Event> | undefined) => any;
  onClick?: (e: React.SyntheticEvent) => any;
  key?: string;
}

export const iconMap: { [key in ValidationColor]: string } = {
  information: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    isOpen = true,
    message,
    title,
    color = 'success',
    onClose,
    onClick,
    duration = 6.5,
    openFrom,
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
            color={color}
            name={iconMap[color]}
            size="medium"
            variant="filled"
          />
          <Text
            sx={styles.toastTitleCss({ alertType: color })}
            variant="surtitle"
          >
            {title}
          </Text>
          <Text sx={styles.toastMessageCss} variant="small">
            {message}
          </Text>
          <Icon
            sx={styles.toastCloseIconCss}
            color="text"
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
