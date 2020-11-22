/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import { TextArea } from '..';

describe('TextArea component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <TextArea
        id="area"
        label="textarea"
        helpText="helpText"
        placeholder="placeholder"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should not render label and helpText when not provided', () => {
    const { container } = render(<TextArea id="area" />);

    expect(container.querySelector('label')).toBe(null);
  });
});
