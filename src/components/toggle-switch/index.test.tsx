/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import { ToggleSwitch } from '.';

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
});
