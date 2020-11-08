/** @jsxRuntime classic */
/** @jsx jsx */
import { render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Icon from '.';

describe('Icon component', () => {
  test('default icon matches snapshot', () => {
    const component = render(<Icon name="accessibility" />);

    expect(component.container).toMatchSnapshot();
  });
});
