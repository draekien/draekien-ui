/** @jsxRuntime classic */
/** @jsx jsx */
import { render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Button from '.';

describe('Button component', () => {
  test('matches snapshot', () => {
    const component = render(<Button>test</Button>);

    expect(component.container).toMatchSnapshot();
  });
});
