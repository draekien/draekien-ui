import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toast, { ToastProps } from '.';
import { ToastProvider } from './provider';
import { ToastContainer } from './container';
import { ToastContextProps } from './context';
import { ToastConsumer } from './consumer';
import Button from '../button';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {},
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Information = Template.bind({});
Information.args = {
  color: 'information',
  title: "Here's some information",
  message: 'I have onClick and onClose handlers',
  onClick: action('clicked'),
  onClose: action('closed'),
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  title: 'Success',
  message:
    "I will automatically close after 10 seconds. (By default I'll close after 6.5 seconds).",
  duration: 10,
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  title: 'Warning',
  message: 'I will stay on the screen forever',
  duration: 0,
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  title: 'Error',
  message: 'I open from the right',
  openFrom: 'right',
};

export const ApiUsage = () => (
  <ToastProvider>
    <ToastContainer offsetTop="0" />
    <ToastConsumer>
      {(context: ToastContextProps) => (
        <div>
          <Button onClick={() => open(context)}>Open</Button>{' '}
          <Button onClick={() => success(context)}>Success</Button>{' '}
          <Button onClick={() => error(context)}>Error</Button>{' '}
          <Button onClick={() => warning(context)}>Alert</Button>{' '}
          <Button onClick={() => closeAll(context)}>Close All</Button>{' '}
          <Button onClick={() => openToClose(context)}>Open (to close)</Button>{' '}
          <Button onClick={() => close(context)}>Close</Button>{' '}
        </div>
      )}
    </ToastConsumer>
  </ToastProvider>
);

let count = 0;
let toClose: number | null = null;

const open = (toast: ToastContextProps) => {
  toast.open({
    title: 'Default Toast',
    message: 'I am a default toast opened using "toast.open({...})"',
  });
};

const openToClose = (toast: ToastContextProps) => {
  if (toClose === null) {
    toClose = count;
    toast.open({
      title: 'Default Toast',
      message: 'I am a default toast opened using "toast.open({...});".',
      duration: 0,
      key: count,
    });
    count++;
  }
};

const success = (toast: ToastContextProps) => {
  toast.success({
    title: 'Success Toast',
    message: 'I am a success toast opened using "toast.success({...});".',
  });
};

const error = (toast: ToastContextProps) => {
  toast.error({
    title: 'Error Toast',
    message: 'I am an error toast opened using "toast.error({...});".',
  });
};

const warning = (toast: ToastContextProps) => {
  toast.warning({
    title: 'Warning Toast',
    message: 'I am an warning toast opened using "toast.warning({...});".',
  });
};

const close = (toast: ToastContextProps) => {
  toast.close(toClose);
  toClose = null;
};

const closeAll = (toast: ToastContextProps) => {
  toast.closeAll();
};
