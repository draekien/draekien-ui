/** @jsx jsx */
import { jsx } from 'theme-ui';
import { act, fireEvent, render } from '@testing-library/react';
import { options } from '../../../constants/fireEventOptions';
import Tooltip from '..';

const Element = () => (
  <div id="test" style={{ width: '100px', height: '100px' }} />
);

describe('Tooltip component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('renders correctly when not hovered', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll('div').length).toEqual(2);
  });

  test('should show tooltip on mouseEnter', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.mouseEnter(container.querySelectorAll('div')[0], options);

    act(() => {
      jest.runAllTimers();
    });

    expect(container.querySelectorAll('div').length).toEqual(4);
  });

  test('should show tooltip on focus', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.focus(container.querySelectorAll('#test')[0], options);

    act(() => {
      jest.runAllTimers();
    });

    expect(container.querySelectorAll('div').length).toEqual(4);
  });

  test('should wait 400ms before showing tooltip', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.focus(container.querySelectorAll('div')[0], options);

    expect(container.querySelectorAll('div').length).toEqual(2);

    act(() => {
      jest.runTimersToTime(400);
    });

    expect(container.querySelectorAll('div').length).toEqual(4);
  });

  test('should hide tooltip when mouseLeave', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.mouseEnter(container.querySelectorAll('div')[0], options);

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.mouseLeave(container.querySelectorAll('div')[0], options);

    expect(container.querySelectorAll('div').length).toEqual(2);
  });

  test('should hide tooktip when blur', () => {
    const { container } = render(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.focus(container.querySelectorAll('div')[0], options);

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.blur(container.querySelectorAll('div')[0], options);

    expect(container.querySelectorAll('div').length).toEqual(2);
  });

  test('should call callback functions for onBlur, onFocus, onMouseEnter and onMouseLeave', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    const { container } = render(
      <Tooltip
        text="tooltip"
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Element />
      </Tooltip>
    );

    const element = container.querySelectorAll('div')[0];

    fireEvent.focus(element, options);

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.blur(element, options);

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.mouseEnter(element, options);

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.mouseLeave(element, options);

    act(() => {
      jest.runAllTimers();
    });

    expect(onBlur).toBeCalledTimes(1);
    expect(onFocus).toBeCalledTimes(1);
    expect(onMouseEnter).toBeCalledTimes(1);
    expect(onMouseLeave).toBeCalledTimes(1);
  });

  test('should display correct text in tooltip', () => {
    const { container } = render(
      <Tooltip text="this is tooltip">
        <Element />
      </Tooltip>
    );

    fireEvent.focus(container.querySelectorAll('div')[0], options);

    act(() => {
      jest.runAllTimers();
    });

    expect(container.textContent).toContain('this is tooltip');
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
