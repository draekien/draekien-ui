/** @jsx jsx */
import { render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Spinner from '..';

describe('Spinner component', () => {
  test('should match snapshot when default', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when bars', () => {
    const { container } = render(<Spinner variant="bars" size="large" />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when dots', () => {
    const { container } = render(<Spinner variant="dots" size="large" />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with custom prop values', () => {
    const { container } = render(
      <Spinner size="large" color="secondary" fullSize />
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when full size and not circle', () => {
    const { container } = render(<Spinner variant="bars" fullSize />);

    expect(container).toMatchSnapshot();
  });
});
