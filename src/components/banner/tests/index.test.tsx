import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Banner from '..';

describe('Banner component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Banner message="banner" />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when all props are populated', () => {
    const { container } = render(
      <Banner
        variant="error"
        message="banner"
        width="20rem"
        icon="accessibility"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should call onClose if callback function passed and close button clicked', () => {
    const fn = jest.fn();

    const { container } = render(
      <Banner message="banner" closable onClose={fn} />
    );

    fireEvent(
      container.querySelectorAll('i')[1],
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
