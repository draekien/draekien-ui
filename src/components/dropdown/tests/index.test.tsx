/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import Dropdown from '..';
import { caretCss } from '../index.styles';

describe('Dropdown component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Dropdown label="dropdown">
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <div key={x}>Item {x}</div>
        ))}
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when hasSelection is true and position is top right', () => {
    const { container } = render(
      <Dropdown label="dropdown" position="top-right" hasSelection>
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <div key={x}>Item {x}</div>
        ))}
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when variant is primary and position is bottom right', () => {
    const { container } = render(
      <Dropdown label="dropdown" position="bottom-right" variant="primary">
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <div key={x}>Item {x}</div>
        ))}
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when maxHeight is set', () => {
    const { container } = render(
      <Dropdown label="dropdown" maxHeight="20px">
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <div key={x}>Item {x}</div>
        ))}
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot when isOpen is true', () => {
    const { container } = render(
      <Dropdown label="dropdown" isOpen>
        {[1, 2, 3, 4, 5, 6, 7].map((x) => (
          <div key={x}>Item {x}</div>
        ))}
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });

  test('caretCss should match snapshot', () => {
    expect(caretCss({ isOpen: false, margin: 4 })).toMatchSnapshot();
  });
});
