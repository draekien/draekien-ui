import { spinnerBarCss, spinnerCircleCss, spinnerDotCss } from './index.styles';

describe('Spinner Bar Css', () => {
  test('should match snapshot', () => {
    expect(
      spinnerBarCss({ size: 'medium', color: 'primary' })
    ).toMatchSnapshot();
  });

  test('should match snapshot when small', () => {
    expect(
      spinnerBarCss({ size: 'small', color: 'secondary' })
    ).toMatchSnapshot();
  });

  test('should match snapshot when large', () => {
    expect(spinnerBarCss({ size: 'large' })).toMatchSnapshot();
  });
});

describe('Spinner Dot Css', () => {
  test('should match snapshot', () => {
    expect(spinnerDotCss({ size: 'medium' })).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(spinnerDotCss({ size: 'small' })).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(spinnerDotCss({ size: 'large' })).toMatchSnapshot();
  });
});

describe('Spinner Circle Css', () => {
  test('should match snapshot', () => {
    expect(
      spinnerCircleCss({ size: 'medium', color: 'primary' })
    ).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(
      spinnerCircleCss({ size: 'small', color: 'secondary' })
    ).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    expect(spinnerCircleCss({ size: 'large' })).toMatchSnapshot();
  });
});
