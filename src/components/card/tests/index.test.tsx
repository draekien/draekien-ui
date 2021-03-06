/** @jsxImportSource theme-ui */
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card, { AccentPosition } from '..';

describe('Card component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Card>Card</Card>);

    expect(container).toMatchSnapshot();
  });

  test('should have maxWidth 10rem when size is small', () => {
    const { container } = render(
      <Card backgroundColor="b-000" size="small">
        Card
      </Card>
    );

    const styles = window.getComputedStyle(container.firstChild as Element);

    expect(styles.width).toBe('10rem');
  });

  test('should have maxWidth 40rem when size is large', () => {
    const { container } = render(
      <Card backgroundColor="b-000" size="large">
        Card
      </Card>
    );

    const styles = window.getComputedStyle(container.firstChild as Element);

    expect(styles.width).toBe('40rem');
  });

  test('should have width 100% when size is large', () => {
    const { container } = render(<Card fullWidth>Card</Card>);

    const styles = window.getComputedStyle(container.firstChild as Element);

    expect(styles.width).toBe('100%');
  });

  test('should call onClick callback function if callback function exists', () => {
    const fn = jest.fn();
    const component = render(<Card onClick={fn}>Card</Card>);

    fireEvent(
      component.getByText('Card'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should render header and footer', () => {
    const { container } = render(
      <Card cardHeader="header" cardFooter="footer">
        content
      </Card>
    );

    expect(container.textContent).toContain('header');
    expect(container.textContent).toContain('footer');
  });

  test('should render with frosted and gradient flags', () => {
    const { container } = render(
      <Card frosted gradient>
        content
      </Card>
    );

    expect(container).toMatchSnapshot();
  });

  ['top', 'left'].forEach((position) => {
    test(`should render with ${position} accent`, () => {
      const { container } = render(
        <Card accentPosition={position as AccentPosition}>content</Card>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
