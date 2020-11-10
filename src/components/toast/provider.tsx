import * as React from 'react';
import { ToastProps } from '.';
import { ToastContext } from './context';

export type ToastProviderProps = {
  initialState?: ToastProps[];
  defaultProps?: ToastProps;
  children: React.ReactNode;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  initialState = [],
  defaultProps = [],
  children,
}) => {
  const [state, setState] = React.useState(initialState);

  let count = 0;
  const getKey = () => {
    return `${Date.now()}_${count++}`;
  };

  const open = (props: ToastProps) => {
    const toasts = [...state];
    const newToast = Object.assign({}, defaultProps, props);

    if (newToast.key === undefined) newToast.key = getKey();
    toasts.push(newToast);

    setState(toasts);
  };

  const close = (key: string) => {
    const toasts = [...state];

    toasts.forEach((toast, index) => {
      if (toast.key === key) toasts[index].isOpen = false;
    });

    setState(toasts);
  };

  const closeAll = () => {
    const toasts = [...state];

    toasts.forEach((toast) => {
      toast.isOpen = false;
    });

    setState(toasts);
  };

  const success = (props: ToastProps) => {
    open(Object.assign({}, props, { color: 'success' }));
  };

  const warning = (props: ToastProps) => {
    open(Object.assign({}, props, { color: 'warning' }));
  };

  const error = (props: ToastProps) => {
    open(Object.assign({}, props, { color: 'error' }));
  };

  const info = (props: ToastProps) => {
    open(Object.assign({}, props, { color: 'information' }));
  };

  return (
    <ToastContext.Provider
      value={{
        toasts: state,
        open,
        close,
        closeAll,
        success,
        warning,
        error,
        info,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
