/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
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
    const r = 12;
    const C = 2 * r * Math.PI;
    const offset = C - (1 / 4) * C;

    const spinner = (
      <svg
        sx={styles.spinnerCircleWrapperCss({ size, color })}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        role="img"
      >
        <title>Loading...</title>
        <circle cx={16} cy={16} r={r} opacity={1 / 8} strokeWidth={4} />
        <circle
          cx={16}
          cy={16}
          r={r}
          strokeDasharray={C}
          strokeDashoffset={offset}
          strokeWidth={4}
          sx={styles.spinnerCircleCss}
        />
      </svg>
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
