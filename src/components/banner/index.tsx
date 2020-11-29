/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import * as React from 'react';
import {
  ValidationColor,
  iconColorMap,
  iconMap,
} from '../../utils/iconMapper.utils';
import * as styles from './index.styles';
import Icon from '../icon';
import Text from '../text';

export type BannerVariant = ValidationColor;
export type BannerProps = {
  /** Is the banner closable
   * @default false
   */
  closable?: boolean;
  /** The color of banner to render
   * @default 'information'
   */
  variant?: BannerVariant;
  /** The width of the banner. Defaults to 100% of the parent container */
  width?: string | number;
  /** an icon to render */
  icon?: string;
  /** contents of the banner */
  message: string;
  /** Event handler to be called when banner is closed */
  onClose?: (e: React.SyntheticEvent) => void;
};

export const Banner: React.FC<BannerProps> = (props) => {
  const {
    closable,
    variant = 'information',
    width,
    icon,
    onClose,
    message,
  } = props;

  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = (e: React.SyntheticEvent) => {
    setIsVisible(false);
    onClose && onClose(e);
  };

  return (
    <Flex sx={styles.bannerContainerCss({ variant, width, isVisible })}>
      <Icon
        sx={styles.bannerIconCss}
        color={iconColorMap[variant]}
        name={icon || iconMap[variant]}
        size="medium"
      />
      <Flex sx={styles.bannerMessageCss}>
        <Text color="text-dark">{message}</Text>
      </Flex>
      {closable && (
        <Icon
          sx={styles.bannerCloseIconCss}
          color="text-dark"
          name="close"
          onClick={handleClose}
          size="small"
        />
      )}
    </Flex>
  );
};

export default Banner;
