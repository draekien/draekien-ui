/** @jsxImportSource theme-ui */

import React from 'react';
import { ToastContext, ToastContextProps, useToastContext } from '../context';
import { ToastProvider } from '../provider';
import { render } from '@testing-library/react';

const toasts = [
  { message: 'Toast 1 Message', title: 'Toast 1 Title', key: '1', duration: 0 },
  { message: 'Toast 2 Message', title: 'Toast 2 Title', key: '2', duration: 0 },
];

describe('ToastContext', () => {
  test('should match snapshot', () => {
    expect(ToastContext).toMatchSnapshot();
  });

  ['open', 'success', 'error', 'warning', 'info'].forEach((fn) => {
    test(`useToastContext hook should open toast when ${fn} is called`, () => {
      let context: ToastContextProps;

      const TestComponent: React.FC = () => {
        const c = useToastContext();

        context = c;

        React.useEffect(() => {
          // @ts-ignore
          c[fn]({ title: 'test', message: 'test', duration: 0 });
        }, []);

        return <div />;
      };

      render(
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      );

      expect(context!.toasts.length).toEqual(1);
      expect(context!.toasts[0].title).toEqual('test');
      expect(context!.toasts[0].message).toEqual('test');
      expect(context!.toasts[0].key).toBeTruthy();
    });
  });

  test('ToastContext should able to close toast', () => {
    let context: ToastContextProps;

    const TestComponent: React.FC = () => {
      const c = React.useContext(ToastContext);

      context = c;

      React.useEffect(() => {
        c.close('1');
      }, []);

      return <div />;
    };

    render(
      <ToastProvider initialState={toasts}>
        <TestComponent />
      </ToastProvider>
    );

    expect(context!.toasts[0].isOpen).toEqual(false);
  });
});
