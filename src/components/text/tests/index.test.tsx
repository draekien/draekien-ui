/** @jsxRuntime classic */
/** @jsx jsx */
import { render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Text from '..';

describe('Text component', () => {
  test('should match snapshot with default props', () => {
    const { container } = render(<Text>test</Text>);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with custom props', () => {
    const { container } = render(
      <Text
        color="primary"
        fullWidth={true}
        align="center"
        variant="hero"
        truncate={true}
        margin="0px"
      >
        Test
      </Text>
    );

    expect(container).toMatchSnapshot();
  });
});
