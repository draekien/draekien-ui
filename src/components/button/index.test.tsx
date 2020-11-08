/** @jsxRuntime classic */
/** @jsx jsx */
import { fireEvent, getByText, render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Button from '.';
import {
  buttonCss,
  linkButtonCss,
  iconWrapperCss,
  ButtonCssProps,
} from './index.styles';

describe('Button component', () => {
  test('should match snapshot', () => {
    const component = render(<Button>test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when variant is secondary', () => {
    const component = render(<Button variant="secondary">test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when variant is outline', () => {
    const component = render(<Button variant="outline">test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when variant is text', () => {
    const component = render(<Button variant="secondary">test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when icon is provided', () => {
    const component = render(<Button icon="accessibility">test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when isCircle is true', () => {
    const component = render(<Button isCircle={true} icon="accessibility" />);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when icon is provided and renderPosition left', () => {
    const component = render(
      <Button icon="accessibility" iconPosition="left">
        test
      </Button>
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when icon is provided and renderPosition right', () => {
    const component = render(
      <Button icon="accessibility" iconPosition="right">
        test
      </Button>
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when href prop is defined', () => {
    const component = render(
      <Button href="https://www.google.com.au">test</Button>
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should call onClick when clicked', (done) => {
    const fn = jest.fn(() => done());
    const component = render(<Button onClick={fn}>test</Button>);

    fireEvent(
      getByText(component.container, 'test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });
});

describe('buttonCss function', () => {
  test('returns primary colors when variant is primary', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      cursor: 'pointer',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'primary',
      borderColor: 'primary',
      color: 'text-white',
      ':hover': {
        backgroundColor: 'primary-hover',
        borderColor: 'primary-hover',
        color: 'text-white',
      },
      ':active': {
        backgroundColor: 'primary-active',
        borderColor: 'primary-active',
        color: 'text-white',
      },
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });

  test('returns secondary css when variant is secondary', () => {
    const props: ButtonCssProps = {
      variant: 'secondary',
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      cursor: 'pointer',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'secondary',
      borderColor: 'secondary',
      color: 'text-white',
      ':hover': {
        backgroundColor: 'secondary-hover',
        borderColor: 'secondary-hover',
        color: 'text-white',
      },
      ':active': {
        backgroundColor: 'secondary-active',
        borderColor: 'secondary-active',
        color: 'text-white',
      },
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });

  test('contains disabled css when disabled', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      disabled: true,
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      cursor: 'not-allowed',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'muted',
      borderColor: 'muted',
      color: 'text-white',
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });

  test('returns expected css when active', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      active: true,
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      cursor: 'pointer',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'primary-active',
      borderColor: 'primary-active',
      color: 'text-white',
      ':hover': {
        backgroundColor: 'primary-hover',
        borderColor: 'primary-hover',
        color: 'text-white',
      },
      ':active': {
        backgroundColor: 'primary-active',
        borderColor: 'primary-active',
        color: 'text-white',
      },
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });

  test('returns expected css when fullwidth', () => {
    const props: ButtonCssProps = {
      variant: 'primary',
      active: true,
      fullWidth: true,
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      cursor: 'pointer',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'primary-active',
      borderColor: 'primary-active',
      color: 'text-white',
      ':hover': {
        backgroundColor: 'primary-hover',
        borderColor: 'primary-hover',
        color: 'text-white',
      },
      ':active': {
        backgroundColor: 'primary-active',
        borderColor: 'primary-active',
        color: 'text-white',
      },
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });

  test('returns expected css when variant is text', () => {
    const props: ButtonCssProps = {
      variant: 'text',
      fullWidth: true,
    };
    const expectedCss = {
      py: 'xs',
      px: props.size || 'md',
      p: 0,
      cursor: 'pointer',
      variant: 'text.subtitle',
      textAlign: 'center',
      textTransform: 'none',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '0.0625rem solid',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'primary',
      ':hover': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'primary-hover',
      },
      ':active': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'primary-active',
      },
    };

    const css = buttonCss(props);

    expect(css).toEqual(expectedCss);
  });
});

describe('linkButtonCss function', () => {
  test('returns expected css when not active', () => {
    const expectedCss = {
      cursor: 'pointer',
      variant: 'text.subtitle',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 0,
      color: 'primary',
      height: 'auto',
      width: 'auto',
      padding: 0,
      ':hover': {
        span: {
          transition: 'all 300ms',
          color: 'primary-hover',
          textDecoration: 'underline',
        },
      },
      ':active': {
        span: {
          transition: 'all 300ms',
          color: 'primary-active',
          textDecoration: 'underline',
        },
      },
      ':disabled': {
        cursor: 'not-allowed',
        span: {
          transition: 'all 300ms',
          color: 'muted',
          textDecoration: 'none',
        },
      },
    };

    expect(linkButtonCss(false)).toEqual(expectedCss);
  });

  test('returns expected css when active', () => {
    const expectedCss = {
      cursor: 'pointer',
      variant: 'text.subtitle',
      transition: 'all 300ms',
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 0,
      color: 'primary',
      height: 'auto',
      width: 'auto',
      padding: 0,
      ':hover': {
        span: {
          transition: 'all 300ms',
          color: 'primary-hover',
          textDecoration: 'underline',
        },
      },
      ':active': {
        span: {
          transition: 'all 300ms',
          color: 'primary-active',
          textDecoration: 'underline',
        },
      },
      ':disabled': {
        cursor: 'not-allowed',
        span: {
          transition: 'all 300ms',
          color: 'muted',
          textDecoration: 'none',
        },
      },
      span: {
        transition: 'all 300ms',
        color: 'primary-active',
        textDecoration: 'underline',
      },
    };

    expect(linkButtonCss(true)).toEqual(expectedCss);
  });
});

describe('iconWrapperCss function', () => {
  test('returns expected css when has text and position left', () => {
    const expectedCss = {
      display: 'inline-flex',
      textDecoration: 'none',
      marginRight: 'xxs',
    };

    expect(iconWrapperCss('left', true)).toEqual(expectedCss);
  });

  test('returns expected css when has text and position right', () => {
    const expectedCss = {
      display: 'inline-flex',
      textDecoration: 'none',
      marginLeft: 'xxs',
    };

    expect(iconWrapperCss('right', true)).toEqual(expectedCss);
  });

  test('returns expected css when no text', () => {
    const expectedCss = {
      display: 'inline-flex',
      textDecoration: 'none',
      i: {
        fontSize: '1.5rem',
      },
    };

    expect(iconWrapperCss('right', false)).toEqual(expectedCss);
  });
});
