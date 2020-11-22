import Badge from '..';
import * as React from 'react';
import { render } from '@testing-library/react';

describe('Badge component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Badge>1</Badge>);

    expect(container).toMatchSnapshot();
    expect(container.textContent).toContain('1');
  });
});
