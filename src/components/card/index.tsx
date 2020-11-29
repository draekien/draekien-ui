/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export type CardSize = 'small' | 'medium' | 'large';
export type CardProps = {
  backgroundColor?: keyof typeof colors;
  size?: CardSize;
  fullWidth?: boolean;
  cardHeader?: React.ReactNode;
  children: React.ReactNode;
  cardFooter?: React.ReactNode;
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
