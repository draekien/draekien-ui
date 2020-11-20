/** @jsx jsx */
import { render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Icon from '..';
import { iconCss } from '../index.styles';

describe('Icon component', () => {
  test('default icon matches snapshot', () => {
    const component = render(<Icon name="accessibility" />);

    expect(component.container).toMatchSnapshot();
  });

  test('outlined icon matches snapshot', () => {
    const component = render(<Icon name="accessibility" variant="outlined" />);

    expect(component.container).toMatchSnapshot();
  });
});

describe('iconCss function', () => {
  test('returns expected css when size is medium', () => {
    const expectedCss = {
      verticalAlign: 'middle',
      color: 'inherit',
      fontSize: '1.5rem',
    };

    expect(iconCss({ size: 'medium' })).toEqual(expectedCss);
  });

  test('returns expected css when size is small', () => {
    const expectedCss = {
      verticalAlign: 'middle',
      color: 'inherit',
      fontSize: '1rem',
    };

    expect(iconCss({ size: 'small' })).toEqual(expectedCss);
  });

  test('returns expected css when size is large', () => {
    const expectedCss = {
      verticalAlign: 'middle',
      color: 'inherit',
      fontSize: '2rem',
    };

    expect(iconCss({ size: 'large' })).toEqual(expectedCss);
  });

  test('returns expected css when color is primary', () => {
    const expectedCss = {
      verticalAlign: 'middle',
      color: 'primary',
      fontSize: '1.5rem',
    };

    expect(iconCss({ size: 'medium', color: 'primary' })).toEqual(expectedCss);
  });
});
