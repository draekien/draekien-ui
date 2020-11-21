/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import DatePicker from '..';
import { render } from '@testing-library/react';

describe('DatePicker component', () => {
  test('should match snapshot', () => {
    const { container } = render(<DatePicker />);

    expect(container).toMatchSnapshot();
  });
});
