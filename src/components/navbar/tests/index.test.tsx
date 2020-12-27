/** @jsxImportSource theme-ui */

import { fireEvent, render } from '@testing-library/react';
import Navbar from '..';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('Navbar component', () => {
  test('should match snaptshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar backgroundColor="primary" />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render mobile menu when viewport width is less than breakpoint', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    act(() => {
      global.innerWidth = 990;
      global.dispatchEvent(new Event('resize'));
    });

    expect(container.textContent).toContain('menu');
  });

  test('should open menu when menu is pressed', () => {
    const fn = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <Navbar onClick={fn} />
      </BrowserRouter>
    );

    fireEvent(
      container.querySelector('button') as Element,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
