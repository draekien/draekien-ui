/** @jsxImportSource theme-ui */

import { render } from '@testing-library/react';
import Textbox from '..';

describe('Textbox component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Textbox id="test" label="test" helpText="test" icon="info" />
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when active and fullwidth', () => {
    const { container } = render(
      <Textbox
        id="test"
        label="test"
        helpText="test"
        icon="info"
        active
        fullWidth
      />
    );

    expect(container).toMatchSnapshot();
  });
});
