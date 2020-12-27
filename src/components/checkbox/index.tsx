/** @jsxImportSource theme-ui */
import { Box, Flex, Input } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import InputWrapper, { InputChildrenProps } from '../input-wrapper';

export interface CheckboxProps
  extends InputChildrenProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  /** text to display as the label */
  children?: React.ReactNode;
  /** custom onToggle event handler */
  onToggle?: (checked: boolean, e: React.SyntheticEvent) => any;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    children,
    id,
    onToggle,
    checked,
    disabled,
    onChange,
    label,
    helpText,
    variant,
    ...rest
  } = props;

  const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
    onToggle && onToggle(e.target.checked, e);
  };

  React.useEffect(() => {
    setIsChecked(!!checked);
  }, [checked]);

  return (
    <InputWrapper helpText={helpText} label={label} id={id} variant={variant}>
      <Flex sx={styles.checkboxWrapperCss}>
        <label sx={styles.checkboxLabelCss(!!children)} htmlFor={id}>
          {children}
        </label>
        <Flex sx={styles.checkboxOuterCss}>
          <Box sx={styles.checkboxCss({ checked: isChecked, disabled })} />
        </Flex>
        <Input
          sx={styles.checkboxInputCss}
          id={id}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          {...rest}
          onChange={onChangeHandler}
          readOnly
        />
      </Flex>
    </InputWrapper>
  );
};

export default Checkbox;
