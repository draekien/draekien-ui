import { render } from '@testing-library/react';
import React from 'react';
import { Avatar } from '../index';

describe('Avatar component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Avatar />);

    expect(container).toMatchSnapshot();
  });
});
