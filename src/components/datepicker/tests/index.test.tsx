/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import DatePicker from '..';
import {
  fireEvent,
  getAllByText,
  getByText,
  render,
} from '@testing-library/react';

describe('DatePicker component', () => {
  test('should match snapshot', () => {
    const { container } = render(<DatePicker />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct month when one is selected', () => {
    const { container } = render(
      <DatePicker selectedDates={[new Date('22 Nov 2020')]} />
    );

    expect(container.textContent).toContain('November 2020');
  });

  test('should render correct month when multiple selected dates cross multiple months', () => {
    const { container } = render(
      <DatePicker
        selectedDates={[
          new Date('22 Nov 2019'),
          new Date('11 Nov 2019'),
          new Date('2 Dec 2019'),
          new Date('3 Dec 2019'),
        ]}
      />
    );

    expect(container.textContent).toContain('December 2019');
  });

  test('should show next month when next month btn pressed', (done) => {
    const fn = jest.fn(() => done());
    const component = render(
      <DatePicker
        selectedDates={[new Date('22 Nov 2019')]}
        onChangeMonth={fn}
      />
    );

    fireEvent(
      getByText(component.container as HTMLElement, 'chevron_right'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(component.container.textContent).toContain('December 2019');
  });

  test('should show prev month when prev month btn pressed', (done) => {
    const fn = jest.fn(() => done());
    const component = render(
      <DatePicker
        selectedDates={[new Date('22 Nov 2019')]}
        onChangeMonth={fn}
      />
    );

    fireEvent(
      getByText(component.container as HTMLElement, 'chevron_left'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(component.container.textContent).toContain('October 2019');
  });

  test('should render correct days for month when Sunday is first day of week', () => {
    const component = render(
      <DatePicker selectedDates={[new Date('22 Oct 2019')]} />
    );

    expect(component.container.textContent).toContain(
      '29301234567891011121314151617181920212223242526272829303112'
    );
  });

  test('should render correct days for month when Monday is first day of week', () => {
    const component = render(
      <DatePicker
        weekStartDay="Monday"
        selectedDates={[new Date('22 Oct 2019')]}
      />
    );

    expect(component.container.textContent).toContain(
      '3012345678910111213141516171819202122232425262728293031123'
    );
  });

  test('should go to prev month when date from prev month is pressed', () => {
    const component = render(
      <DatePicker selectedDates={[new Date('22 Nov 2019')]} />
    );

    fireEvent(
      getAllByText(component.container as HTMLElement, '27')[0],
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(component.container.textContent).toContain('October 2019');
  });

  test('calls callback with correct date in single mode', () => {
    const fn = jest.fn();
    const date = new Date('2 Dec 2019');
    const component = render(
      <DatePicker selectedDates={[new Date('3 Dec 2019')]} onChange={fn} />
    );

    fireEvent(
      getAllByText(component.container as HTMLElement, '2')[0],
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith([date], date);
  });
});
