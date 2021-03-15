import { render } from '@testing-library/react';
import React from 'react';
import Skeleton from '..';

describe('Skeleton component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Skeleton />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with custom props', () => {
    const { container } = render(
      <Skeleton
        height="1rem"
        width="1rem"
        color="primary"
        backgroundColor="p-000"
        boxShadow="lg"
        borderRadius="lg"
        fullWidth
      />
    );

    expect(container).toMatchSnapshot();
  });
});
