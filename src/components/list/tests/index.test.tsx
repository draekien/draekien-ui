/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';
import List, { ListItemProps } from '..';
import Button from '../../button';

describe('List component', () => {
  const items = [
    { value: 1, text: 'one' },
    { value: 2, text: 'two' },
    { value: 3, text: 'three' },
  ];

  const transformFn = (item: ListItemProps) => (
    <Button fullWidth>{item.text}</Button>
  );

  const itemsWithTransform = [
    { value: 1, text: 'one', transform: transformFn },
    { value: 2, text: 'two', transform: transformFn },
    { value: 3, text: 'three', transform: transformFn },
  ];

  test('should match snapshot', () => {
    const { container } = render(<List items={items} />);

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with custom props', () => {
    const { container } = render(
      <List
        label="test"
        variant="ol"
        focusedIndex={0}
        items={itemsWithTransform}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
