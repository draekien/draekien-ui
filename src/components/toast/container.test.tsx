/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import { ToastProvider } from './provider';
import { ToastContainer } from './container';

const toasts = [
  { message: 'Toast 1 Message', title: 'Toast 1 Title', key: '1', duration: 0 },
  { message: 'Toast 2 Message', title: 'Toast 2 Title', key: '2', duration: 0 },
];

describe('ToastContainer component', () => {
  test('should match snapshot', () => {
    const component = render(
      <ToastProvider initialState={toasts}>
        <ToastContainer offsetTop="0" />
      </ToastProvider>
    );

    expect(component.container).toMatchSnapshot();
  });
});
