import { SxStyleProp } from 'theme-ui';
import { DateInputProps } from '.';

export const dateInputCss = (props: DateInputProps): SxStyleProp => ({
  display: 'inline-block',
  width: props.fullWidth ? '100%' : 'auto',
  position: 'relative',
});

export const datePickerWrapper = (alignRight: boolean): SxStyleProp => ({
  position: 'absolute',
  marginTop: '0.25rem',
  left: alignRight ? 'auto' : '0',
  right: alignRight ? '0' : 'auto',
  boxShadow: 'md',
  zIndex: 'dropdown',
  backgroundColor: 'p-000',
});
