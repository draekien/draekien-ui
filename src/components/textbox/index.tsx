/** @jsx jsx */
import { Box, Input, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import InputWrapper, { InputChildrenProps } from '../input-wrapper';
import Icon from '../icon';

export interface TextBoxProps
  extends InputChildrenProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'size'> {
  value?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  addon?: React.ReactNode;
}

export const Textbox = React.forwardRef(
  (props: TextBoxProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      id,
      label,
      helpText,
      value,
      icon,
      fullWidth,
      active,
      size,
      variant,
      addon,
      ...rest
    } = props;

    const TextboxTail = () => {
      if (addon) return <Box sx={styles.textboxTailCss(props)}>{addon}</Box>;
      return null;
    };

    return (
      <InputWrapper
        id={id}
        label={label}
        helpText={helpText}
        fullWidth={fullWidth}
        variant={variant}
      >
        <Box sx={styles.textboxWrapperCss}>
          <Input
            id={id}
            ref={ref}
            sx={styles.inputCss({
              withIcon: !!icon,
              withStatus: !!variant || !!addon,
              variant,
              size,
              active,
              ...props,
            })}
            value={value}
            {...rest}
            size={undefined}
          />
          {icon && (
            <Box as="span" sx={styles.inputLeftIconCss}>
              <Icon name={icon} />
            </Box>
          )}
          <TextboxTail />
        </Box>
      </InputWrapper>
    );
  }
);

export default Textbox;
