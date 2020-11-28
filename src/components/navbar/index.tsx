/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';
import Button from '../button';
import { Link } from 'react-router-dom';
import { useViewport } from '../../hooks';

export type NavbarProps = {
  logo?: React.ReactNode;
  /**
   * @default 'background'
   */
  backgroundColor?: keyof typeof colors;
  onClick?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  backgroundColor = 'background',
  onClick,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { width: vpWidth } = useViewport();

  const breakpoint = 992; // 62rem
  const isMobile = vpWidth <= breakpoint;

  const handleMobileMenuClick = (e: React.SyntheticEvent) => {
    setIsOpen(!isOpen);
    onClick && onClick(e);
  };

  const conditionalMobileMenuBtn = () => {
    if (isMobile) {
      return (
        <Button
          variant="text"
          icon={isOpen ? 'menu_open' : 'menu'}
          iconPosition="right"
          onClick={handleMobileMenuClick}
        />
      );
    }
  };

  const conditionalMobileMenu = () => {
    if (isMobile) {
      return (
        <Box sx={styles.navbarMobileMenuChildrenWrapperCss}>{children}</Box>
      );
    }
  };

  const conditionalDesktopMenu = () => {
    if (!isMobile) {
      return <Box sx={styles.navbarChildrenWrapperCss}>{children}</Box>;
    }
  };

  return (
    <Flex
      as="nav"
      sx={styles.navbarWrapperCss({ backgroundColor, isOpen, isMobile })}
    >
      <Flex sx={styles.navbarDesktopWrapperCss}>
        <Link to="/">{logo}</Link>
        {conditionalDesktopMenu()}
        {conditionalMobileMenuBtn()}
      </Flex>
      {conditionalMobileMenu()}
    </Flex>
  );
};

export default Navbar;
