/** @jsx jsx */
import { jsx } from 'theme-ui';
import { fireEvent, getByText, render } from '@testing-library/react';
import { ToggleSwitch } from '..';

describe('ToggleSwitch component', () => {
  test('should match snapshot', () => {
    const { container } = render(<ToggleSwitch id="toggle" />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when position right', () => {
    const { container } = render(
      <ToggleSwitch id="toggle" togglePosition="right" />
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot and render children', () => {
    const { container } = render(
      <ToggleSwitch id="toggle" togglePosition="right">
        Test
      </ToggleSwitch>
    );

    expect(container).toMatchSnapshot();
  });

  test('should call callback fn when toggled', (done) => {
    const fn = jest.fn(() => done());

    const component = render(
      <ToggleSwitch id="toggle" togglePosition="right" onToggle={fn}>
        Test
      </ToggleSwitch>
    );

    fireEvent(
      getByText(component.container, 'Test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });
});
