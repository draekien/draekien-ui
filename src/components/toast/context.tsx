import * as React from 'react';
import { ToastProps } from '.';

export type ToastContextProps = {
  toasts: ToastProps[];
  open: Function;
  close: Function;
  closeAll: Function;
  success: Function;
  error: Function;
  warning: Function;
  info: Function;
};

export const ToastContext = React.createContext<ToastContextProps>({
  toasts: [],
  open: () => {},
  close: () => {},
  closeAll: () => {},
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
});

export const useToastContext = () => React.useContext(ToastContext);
