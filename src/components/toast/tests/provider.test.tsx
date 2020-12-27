/** @jsxImportSource theme-ui */

import { act, render } from '@testing-library/react';
import { ToastProvider } from '../provider';
import { ToastContextProps } from '../context';
import { ToastConsumer } from '../consumer';

const toasts = [
  { message: 'Toast 1 Message', title: 'Toast 1 Title', key: '1', duration: 0 },
  { message: 'Toast 2 Message', title: 'Toast 2 Title', key: '2', duration: 0 },
];

describe('ToastProvider', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <ToastProvider>
        <div id="test_container" />
      </ToastProvider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render children', () => {
    const { container } = render(
      <ToastProvider initialState={toasts}>
        <div id="test_container" />
      </ToastProvider>
    );

    const child = container.querySelector('#test_container');

    expect(child).not.toBeNull();
  });

  test('should provide correct api to consumer', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    expect(context!.toasts).toEqual([]);
    expect(context!.open).toBeTruthy();
    expect(context!.close).toBeTruthy();
    expect(context!.closeAll).toBeTruthy();
    expect(context!.success).toBeTruthy();
    expect(context!.error).toBeTruthy();
    expect(context!.warning).toBeTruthy();
  });

  test('should provide initial state to consumer', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider initialState={toasts}>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );
    expect(context!.toasts).toEqual(toasts);
  });

  test('should update state correctly when open is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      context!.open({
        title: 'Title',
        message: 'Message',
        duration: 0,
        key: 1,
      });
    });

    expect(context!.toasts.length).toEqual(1);
    expect(context!.toasts[0].title).toEqual('Title');
    expect(context!.toasts[0].message).toEqual('Message');
    expect(context!.toasts[0].key).toBeTruthy();
  });

  test('should use default props if provided when open is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider defaultProps={{ color: 'error' }}>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      context!.open({ title: 'Title', message: 'Message', duration: 0 });
    });

    expect(context!.toasts[0].color).toEqual('error');
  });

  test('should override default props if element has prop when open is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider defaultProps={{ title: 'Foo' }}>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      context!.open({ title: 'Title', message: 'Message', duration: 0 });
    });

    expect(context!.toasts[0].title).toEqual('Title');
  });

  test('should update the state correctly when close is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider initialState={toasts}>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      context!.close('1');
    });

    expect(context!.toasts[0].isOpen).toEqual(false);
  });

  test('should update the state correctly when closeAll is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider initialState={toasts}>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      context!.closeAll();
    });

    expect(context!.toasts[0].isOpen).toEqual(false);
    expect(context!.toasts[1].isOpen).toEqual(false);
  });

  ['success', 'error', 'warning'].forEach((color) => {
    test(`should update the state correctly when ${color} is called`, () => {
      let context: ToastContextProps;
      render(
        <ToastProvider>
          <ToastConsumer>
            {(c) => {
              context = c;
              return <div />;
            }}
          </ToastConsumer>
        </ToastProvider>
      );

      act(() => {
        // @ts-ignore
        context[color]({ title: 'Title', message: 'Message', duration: 0 });
      });

      expect(context!.toasts.length).toEqual(1);
      expect(context!.toasts[0].title).toEqual('Title');
      expect(context!.toasts[0].message).toEqual('Message');
      expect(context!.toasts[0].color).toEqual(color);
      expect(context!.toasts[0].key).toBeTruthy();
    });
  });

  test('should update the state correctly when info is called', () => {
    let context: ToastContextProps;
    render(
      <ToastProvider>
        <ToastConsumer>
          {(c) => {
            context = c;
            return <div />;
          }}
        </ToastConsumer>
      </ToastProvider>
    );

    act(() => {
      // @ts-ignore
      context['info']({ title: 'Title', message: 'Message', duration: 0 });
    });

    expect(context!.toasts.length).toEqual(1);
    expect(context!.toasts[0].title).toEqual('Title');
    expect(context!.toasts[0].message).toEqual('Message');
    expect(context!.toasts[0].color).toEqual('information');
    expect(context!.toasts[0].key).toBeTruthy();
  });
});
