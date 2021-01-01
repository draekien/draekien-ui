/** @jsxImportSource theme-ui */

import * as React from 'react';
import {
  fireEvent,
  getAllByText,
  getByText,
  render,
} from '@testing-library/react';
import DateInput from '..';

describe('DateInput component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <DateInput id="datepicker" selectedDate={new Date('1 Nov 2020')} />
    );

    expect(container).toMatchSnapshot();
  });

  test('onchange function is correctly called', () => {
    const fn = jest.fn();
    const date = new Date();
    const nextDateInSeconds = new Date().setDate(new Date().getDate() + 1);
    const nextDate = new Date(nextDateInSeconds).getDate();
    const { container } = render(
      <DateInput id="datepicker" selectedDate={date} onChange={fn} />
    );

    fireEvent(
      getByText(container as HTMLElement, 'date_range'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    fireEvent(
      getAllByText(container as HTMLElement, `${nextDate}`)[0],
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
