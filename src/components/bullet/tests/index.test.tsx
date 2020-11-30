import * as React from 'react';
import { render } from '@testing-library/react';
import Bullet from '..';

describe('Bullet component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Bullet color="primary" fullWidth invert>
        bullet
      </Bullet>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with defaults', () => {
    const { container } = render(<Bullet>bullet</Bullet>);

    expect(container).toMatchSnapshot();
  });
});
