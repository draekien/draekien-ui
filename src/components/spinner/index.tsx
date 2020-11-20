/** @jsx jsx */
import { Flex, jsx, Spinner as ThemeUiSpinner } from 'theme-ui';
import React from 'react';
import { colors } from '../theme/colors';
import * as styles from './index.styles';

export type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof colors;
  variant?: 'circle' | 'bars' | 'dots';
  fullSize?: boolean;
};

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const {
    size = 'medium',
    color = 'primary',
    variant = 'circle',
    fullSize = false,
  } = props;

  if (variant === 'circle') {
    const spinner = (
      <ThemeUiSpinner sx={styles.spinnerCircleCss({ size, color })} />
    );

    return fullSize ? <Flex sx={styles.overlayCss}>{spinner}</Flex> : spinner;
  }

  const spinner = (
    <div sx={styles.spinnerCss}>
      {[1, 2, 3].map((val) => (
        <div
          sx={
            variant === 'bars'
              ? styles.spinnerBarCss({ size, color })
              : styles.spinnerDotCss({ size })
          }
          key={val}
        />
      ))}
    </div>
  );

  return fullSize ? <Flex sx={styles.overlayCss}>{spinner}</Flex> : spinner;
};

export default Spinner;
