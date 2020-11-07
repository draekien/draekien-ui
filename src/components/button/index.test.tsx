import { render } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('Button component', () => {
  test('matches snapshot', () => {
    const component = render(<Button>test</Button>);

    expect(component.container).toMatchSnapshot();
  });
});
