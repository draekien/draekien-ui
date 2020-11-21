/** @jsx jsx */
import { fireEvent, getByText, render } from '@testing-library/react';
import { jsx } from 'theme-ui';
import Toast from '..';

describe('Toast component', () => {
  test('should match snapshot', () => {
    const { container } = render(<Toast title="test" message="test" />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when information', () => {
    const { container } = render(
      <Toast color="information" title="test" message="test" openFrom="left" />
    );

    expect(container).toMatchSnapshot();
  });

  test('onClick successfully calls callback function', (done) => {
    const fn = jest.fn(() => done());
    const { container } = render(<Toast onClick={fn} title="test" />);

    fireEvent(
      getByText(container as HTMLElement, 'test'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });

  test('onClose successfully calls callback function', (done) => {
    const fn = jest.fn(() => done());
    const { container } = render(<Toast onClose={fn} title="test" />);

    fireEvent(
      getByText(container as HTMLElement, 'close'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });
});
