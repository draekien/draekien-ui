/** @jsxRumtime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import InputWrapper from '..';

describe('InputWrapper component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <InputWrapper id="test" label="test" tooltip="test" />
    );

    expect(container).toMatchSnapshot();
  });
});
