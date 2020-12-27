/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import Text from '../text';

export type ListItemProps = {
  /** the value of the list item */
  value: string | number | undefined;
  /** the text to display */
  text: string;
  /** is item disabled */
  disabled?: boolean;
  /** function to transform the item */
  transform?: (listItem: ListItemProps) => any;
};

export type ListProps = {
  /** list heading */
  label?: string;
  /** type of list (for screenreader)
   * @default 'ul'
   */
  variant?: 'ol' | 'ul';
  /** list items */
  items: ListItemProps[];
  /** index of focused item */
  focusedIndex?: number;
  /** onclick handler
   * Calls preventDefault() so it does not fire multiple times
   * Elements rendered via transform must be controlled manually
   */
  onClick?: (selectedItem?: ListItemProps, e?: React.MouseEvent) => any;
};

export const List: React.FC<ListProps> = ({
  label,
  variant = 'ul',
  items,
  focusedIndex,
  onClick,
}) => {
  const handleClick = (item: ListItemProps) => (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!item.disabled) {
      onClick && onClick(item, e);
    }
  };

  return (
    <Flex sx={styles.listWrapperCss}>
      {label && (
        <Text variant="eyebrow" sx={styles.labelCss}>
          {label}
        </Text>
      )}
      <Box as={variant} sx={styles.listCss}>
        {items.map((item, index) => (
          <li
            key={index}
            sx={styles.listItemCss(
              item.disabled || false,
              focusedIndex === index
            )}
            onClick={handleClick(item)}
          >
            {item.transform ? (
              item.transform(item)
            ) : (
              <Text color="text-dark">{item.text}</Text>
            )}
          </li>
        ))}
      </Box>
    </Flex>
  );
};

export default List;
