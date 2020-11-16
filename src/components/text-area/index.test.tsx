/** @jsxRumtime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import { TextArea } from '.';

describe('TextArea component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <TextArea
        id="area"
        label="textarea"
        tooltip="tooltip"
        placeholder="placeholder"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should not render label and tooltip when not provided', () => {
    const { container } = render(<TextArea id="area" />);

    expect(container.querySelector('label')).toBe(null);
  });
});
