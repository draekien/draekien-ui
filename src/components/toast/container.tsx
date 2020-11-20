/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Toast, { ToastProps } from '.';
import { ToastConsumer } from './consumer';
import * as styles from './index.styles';

export type ToastContainerProps = {
  offsetTop: string | string[];
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  offsetTop,
  ...props
}) => {
  return (
    <ToastConsumer>
      {(context) => (
        <div
          id="draekien_ui_toast_container"
          sx={styles.toastContainerCss({ offsetTop })}
          {...props}
        >
          {context.toasts.map((toast: ToastProps) => {
            return <Toast key={toast.key} {...toast} />;
          })}
        </div>
      )}
    </ToastConsumer>
  );
};
