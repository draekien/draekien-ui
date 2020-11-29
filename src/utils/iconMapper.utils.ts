import { colors } from '../components/theme/colors';

export type ValidationColor = 'information' | 'success' | 'warning' | 'error';

export const iconMap: { [key in ValidationColor]: string } = {
  information: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

export const iconColorMap: { [key in ValidationColor]: keyof typeof colors } = {
  information: 'information-400',
  success: 'success-400',
  warning: 'warning-400',
  error: 'error-400',
};
