/** @jsxRuntime classic */
/** @jsx jsx */
import { fireEvent, getByText, render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Button from '.';
import Icon from '../icon';

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

  test('should match snapshot when isIcon and size is large', () => {
    const component = render(<Button icon="accessibility" size="lg" />);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when isCircle and size is sm', () => {
    const component = render(
      <Button isCircle={true} size="sm">
        CJ
      </Button>
    );

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

  test('should match snapshot when href prop is defined and isActive', () => {
    const component = render(
      <Button href="https://www.google.com.au" isActive={true}>
        test
      </Button>
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

  test('should match snapshot when size is sm', () => {
    const component = render(<Button size="sm">test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when openLinkInNewTab is true', () => {
    const component = render(
      <Button href="https://www.google.com.au" openLinkInNewTab={true}>
        test
      </Button>
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when disabled', () => {
    const component = render(<Button disabled={true}>test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when full width', () => {
    const component = render(<Button fullWidth={true}>test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when active', () => {
    const component = render(<Button isActive={true}>test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when loading', () => {
    const component = render(<Button isLoading={true}>test</Button>);

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when loading and showChildrenWhenLoading', () => {
    const component = render(
      <Button isLoading={true} showChildrenWhenLoading={true}>
        test
      </Button>
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when icon is provided', () => {
    const component = render(
      <Button icon="accessibility" iconPosition="left" isCircle={true} />
    );

    expect(component.container).toMatchSnapshot();
  });

  test('should match snapshot when icon is not string', () => {
    const component = render(
      <Button icon={<Icon name="accessibility" />}>test</Button>
    );

    expect(component.container).toMatchSnapshot();
  });
});
