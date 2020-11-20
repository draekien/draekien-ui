/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import { ThemeProvider } from '..';

describe('Theme component', () => {
  test('should merge themes but not dangerous keys', () => {
    const component = render(
      <ThemeProvider
        theme={{
          space: {
            xl: '5rem',
          },
          // @ts-ignore
          __proto__: 'something bad',
          // @ts-ignore
          constructor: 'something worse',
        }}
      >
        <div />
      </ThemeProvider>
    );

    expect(component.container).toMatchSnapshot();
  });
});
