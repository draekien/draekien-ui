/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export type CardSize = 'small' | 'medium' | 'large';
export type AccentPosition = 'top' | 'right' | 'bottom' | 'left';
export type CardProps = {
  /** background color for the card
   * @default 'p-000'
   */
  backgroundColor?: keyof typeof colors;
  /** position of the accent border */
  accentPosition?: AccentPosition;
  /** color of the accent border. Only visible when accentPosition is set.
   * @default 'p-400'
   */
  accentColor?: keyof typeof colors;
  /** width of the card - overridden when fullwidth is true
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
    accentPosition,
    accentColor = 'p-400',
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
        accentPosition,
        accentColor,
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
