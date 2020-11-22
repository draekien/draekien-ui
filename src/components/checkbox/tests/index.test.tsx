/** @jsx jsx */
import { fireEvent, getByText, render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Checkbox from '..';

describe('Checkbox component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Checkbox id="checkbox" label="checkbox" helpText="helpText">
        test checkbox
      </Checkbox>
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onChange', (done) => {
    const fn = jest.fn(() => done());
    const component = render(
      <Checkbox id="checkbox" onChange={fn}>
        test
      </Checkbox>
    );

    fireEvent(
      getByText(component.container as HTMLElement, 'test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });

  test('should call onToggle', (done) => {
    const fn = jest.fn(() => done());
    const component = render(
      <Checkbox id="checkbox" onToggle={fn}>
        test
      </Checkbox>
    );

    fireEvent(
      getByText(component.container as HTMLElement, 'test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });

  test('should be disabled when disabled prop is true', () => {
    const component = render(<Checkbox id="checkbox" disabled />);

    expect(component.container.querySelector('input')).toBeDisabled();
  });
});
