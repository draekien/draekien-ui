/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import DraekienUi from '.';

describe('DraekienUi component', () => {
  test('should match snapshot', () => {
    const { container } = render(<DraekienUi>Test</DraekienUi>);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when toast context is not used', () => {
    const { container } = render(
      <DraekienUi useToastContext={false}>Test</DraekienUi>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when offset is set', () => {
    const { container } = render(
      <DraekienUi toastContainerOffsetTop="20px">Test</DraekienUi>
    );

    expect(container).toMatchSnapshot();
  });
});
