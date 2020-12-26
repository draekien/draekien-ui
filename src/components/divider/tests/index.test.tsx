/** @jsxImportSource theme-ui */

import { render } from '@testing-library/react';
import Divider from '..';

describe('Divider component', () => {
  test('solid divider should match snapshot', () => {
    const { container } = render(<Divider variant="solid" />);

    expect(container).toMatchSnapshot();
  });

  test('gradient divider should match snapshot', () => {
    const { container } = render(<Divider variant="gradient" />);

    expect(container).toMatchSnapshot();
  });

  [
    { size: 'sm', width: '20rem' },
    { size: 'md', width: '40rem' },
    { size: 'lg', width: '60rem' },
  ].forEach((size) => {
    test(`${size.size} divider should have width ${size.width}`, () => {
      const { container } = render(<Divider size={size.size as any} />);

      const styles = window.getComputedStyle(container.firstChild as Element);

      expect(styles.width).toBe(size.width);
    });
  });

  [
    { size: 'sm', height: '20rem' },
    { size: 'md', height: '40rem' },
    { size: 'lg', height: '60rem' },
  ].forEach((size) => {
    test(`${size.size} divider should have height ${size.height}`, () => {
      const { container } = render(
        <Divider size={size.size as any} orientation="vertical" />
      );

      const styles = window.getComputedStyle(container.firstChild as Element);

      expect(styles.height).toBe(size.height);
    });
  });

  test('Divider should respect fullWidth flag', () => {
    const { container } = render(<Divider fullWidth />);

    const styles = window.getComputedStyle(container.firstChild as Element);

    expect(styles.width).toBe('100%');
  });

  test('Divider should respect fullWidth flag when vertical', () => {
    const { container } = render(<Divider orientation="vertical" fullWidth />);

    const styles = window.getComputedStyle(container.firstChild as Element);

    expect(styles.height).toBe('100%');
  });

  test('Divider should change color', () => {
    const { container } = render(<Divider color="primary" variant="solid" />);

    expect(container).toMatchSnapshot();
  });
});
