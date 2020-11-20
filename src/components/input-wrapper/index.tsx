/** @jsx jsx */
import { Box, jsx, Label } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import Text from '../text';
import { colors } from '../theme/colors';

export interface InputChildrenProps {
  /** id of the input */
  id: string;
  /** label text */
  label?: string;
  /** tooltip, help or error message located beneath input */
  tooltip?: string;
  /** should this component take up the whole width of the parent container */
  fullWidth?: boolean;
  /** color to render the input */
  variant?: 'error' | 'warning' | 'success';
}

export interface InputWrapperProps extends InputChildrenProps {
  /** children to render inside the wrapper */
  children?: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const { id, label, tooltip, variant, children } = props;

  return (
    <Box sx={styles.inputWrapperCss(props)}>
      {label && (
        <Label sx={styles.tooltipCss} htmlFor={id}>
          <Text variant="surtitle">{label}</Text>
        </Label>
      )}
      {children}
      {tooltip && (
        <Label sx={styles.tooltipCss} htmlFor={id}>
          <Text
            variant="caption"
            color={(variant as keyof typeof colors) || 'text'}
          >
            {tooltip}
          </Text>
        </Label>
      )}
    </Box>
  );
};

export default InputWrapper;
