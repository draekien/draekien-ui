import {
  buttonCss,
  linkButtonCss,
  iconWrapperCss,
  ButtonCssProps,
} from '../index.styles';

describe('buttonCss function', () => {
  test('returns primary colors when variant is primary', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });

  test('returns secondary css when variant is secondary', () => {
    const props: ButtonCssProps = {
      variant: 'secondary',
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });

  test('contains disabled css when disabled', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      disabled: true,
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });

  test('returns expected css when active', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      active: true,
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });

  test('returns expected css when fullwidth', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      active: true,
      fullWidth: true,
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });

  test('returns expected css when variant is text', () => {
    const props: ButtonCssProps = {
      variant: 'text',
      fullWidth: true,
    };

    const css = buttonCss(props);

    expect(css).toMatchSnapshot();
  });
});

describe('linkButtonCss function', () => {
  test('returns expected css when not active', () => {
    expect(linkButtonCss(false)).toMatchSnapshot();
  });

  test('returns expected css when active', () => {
    expect(linkButtonCss(true)).toMatchSnapshot();
  });
});

describe('iconWrapperCss function', () => {
  test('returns expected css when has text and position left', () => {
    expect(iconWrapperCss('left', true)).toMatchSnapshot();
  });

  test('returns expected css when has text and position left', () => {
    expect(iconWrapperCss('left', false)).toMatchSnapshot();
  });

  test('returns expected css when has text and position right', () => {
    expect(iconWrapperCss('right', true)).toMatchSnapshot();
  });

  test('returns expected css when no text', () => {
    expect(iconWrapperCss('right', false)).toMatchSnapshot();
  });
});
