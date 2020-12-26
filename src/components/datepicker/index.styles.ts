import { ThemeUIStyleObject } from 'theme-ui';

export const datePickerCss: ThemeUIStyleObject = {
  display: 'inline-block',
  padding: '1.5rem',
  width: '17rem',
};

export const datePickerHeaderCss: ThemeUIStyleObject = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '1rem',
  justifyContent: 'space-between',
};

export const datePickerLabelCss: ThemeUIStyleObject = {
  color: 'p-300',
  display: 'inline-block',
  textAlign: 'center',
};

export const datePickerWeekdayWrapperCss: ThemeUIStyleObject = {
  color: 'b-400',
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '10px',
  textAlign: 'center',
};

export const datePickerWeekdayCss: ThemeUIStyleObject = {
  display: 'inline-block',
  width: '2rem',
};

export const datePickerDayWrapperCss: ThemeUIStyleObject = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

type DatePickerDayCssProps = {
  isSelected: boolean;
  isWithinSelectedRange: boolean;
  isWithinHoverRange: boolean;
  isDisabled: boolean;
  isAnotherMonth?: boolean;
};

export const datePickerDayCss = (
  props: DatePickerDayCssProps
): ThemeUIStyleObject => {
  const css: any = {
    border: '0',
    display: 'inline-block',
    height: '2rem',
    padding: '8px',
    textAlign: 'center',
    variant: 'text.small',
    width: '2rem',
    transition: 'all 300ms',
  };

  if (!props.isDisabled) {
    css.cursor = 'pointer';
    css[':hover'] = {
      backgroundColor: 'p-200',
      color: 'white',
    };
  }

  if (props.isSelected) {
    css.backgroundColor = 'p-300';
    css.color = 'white';
  } else if (props.isWithinSelectedRange || props.isWithinHoverRange) {
    css.backgroundColor = 'p-100';
    css.color = 'b-600';
  } else if (props.isDisabled) {
    css.backgroundColor = 'b-200';
    css.color = 'b-300';
  } else {
    css.backgroundColor = 'p-000';
    css.color = props.isAnotherMonth ? 'b-300' : 'b-600';
  }

  return css;
};
