/** @jsx jsx */
import { Flex, jsx, Label } from 'theme-ui';
import Switch from 'react-switch';
import React, { SyntheticEvent } from 'react';
import * as styles from './index.styles';
import { colors } from '../theme/colors';

export interface ToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  children?: React.ReactNode;
  togglePosition?: 'left' | 'right';
  onToggle?: (
    checked: boolean,
    id: string,
    e: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>
  ) => any;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  const {
    id,
    children,
    onToggle,
    checked,
    togglePosition = 'left',
    disabled,
  } = props;
  const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

  const handleChange = (
    checked: boolean,
    event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string
  ) => {
    setIsChecked(checked);
    onToggle && onToggle(checked, id, event);
  };

  React.useEffect(() => {
    setIsChecked(!!checked);
  }, [checked]);

  const renderToggleSwitch = (renderPosition: 'left' | 'right') => {
    if (togglePosition !== renderPosition) return null;
    return (
      <Switch
        id={id}
        checked={isChecked}
        onChange={handleChange}
        uncheckedIcon={false}
        checkedIcon={false}
        disabled={disabled}
        onColor={colors.primary}
        handleDiameter={18}
        height={20}
        width={40}
      />
    );
  };

  return (
    <Flex sx={styles.toggleSwitchWrapperCss}>
      {renderToggleSwitch('left')}
      <Label sx={styles.toggleSwitchLabelCss} htmlFor={id}>
        {children}
      </Label>
      {renderToggleSwitch('right')}
    </Flex>
  );
};

export default ToggleSwitch;
