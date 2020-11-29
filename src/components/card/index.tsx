/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export type CardSize = 'small' | 'medium' | 'large';
export type CardProps = {
  /** background color for the card
   * @default 'p-000'
   */
  backgroundColor?: keyof typeof colors;
  /** maximum width of the card
   * @default 'medium'
   */
  size?: CardSize;
  /** should the card take up the full width of the container
   * @default false
   */
  fullWidth?: boolean;
  /** contents of the card header */
  cardHeader?: React.ReactNode;
  /** contents of the card body */
  children: React.ReactNode;
  /** contents of the card footer */
  cardFooter?: React.ReactNode;
  /** event handler for when card is clicked */
  onClick?: (e: React.SyntheticEvent) => void;
};

export const Card: React.FC<CardProps> = (props) => {
  const {
    backgroundColor = 'p-000',
    size = 'medium',
    fullWidth = false,
    cardHeader,
    children,
    cardFooter,
    onClick,
  } = props;

  const conditionalCardHeader = () => cardHeader && <Box>{cardHeader}</Box>;

  const conditionalCardFooter = () => cardFooter && <Box>{cardFooter}</Box>;

  const wrappedChildren = () => (
    <Box sx={styles.childrenContainerCss}>{children}</Box>
  );

  const handleClick = (e: React.SyntheticEvent) => {
    onClick && onClick(e);
  };

  return (
    <Flex
      sx={styles.cardContainerCss({
        hasClickHandler: !!onClick,
        backgroundColor,
        fullWidth,
        size,
      })}
      onClick={handleClick}
    >
      {conditionalCardHeader()}
      {wrappedChildren()}
      {conditionalCardFooter()}
    </Flex>
  );
};

export default Card;
