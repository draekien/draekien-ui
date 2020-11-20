/** @jsx jsx */
import { fireEvent, getByText, render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Checkbox from '..';

describe('Checkbox component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Checkbox id="checkbox" label="checkbox" tooltip="tooltip">
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
      getByText(component.container, 'test'),
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
      getByText(component.container, 'test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });
});
