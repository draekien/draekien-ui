/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import * as React from 'react';

const ReactInputMask = require('react-input-mask');
import OutsideClickHandler from 'react-outside-click-handler';
import DatePicker, { WeekStartDay } from '../datepicker';
import Icon from '../icon';
import Textbox, { TextBoxProps } from '../textbox';
import * as utils from '../../utils/dateinput.utils';
import * as styles from './index.styles';

export interface DateInputProps extends Omit<TextBoxProps, 'onChange'> {
  /** event handler to be called when a change event is triggered */
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    strVal?: string,
    dateVal?: Date
  ) => void;
  /** which day of the week do you want as the start date
   * @default 'Sunday'
   */
  weekStartDay?: WeekStartDay;
  /** the month that is initially displayed */
  initialMonth?: Date;
  /** the date that is initially selected */
  selectedDate?: Date;
  /** which side of the input should the datepicker align to
   * @default 'left'
   */
  datePickerPosition?: 'left' | 'right';
}

export const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    onChange,
    onPaste,
    onMouseDown,
    onFocus,
    value,
    onBlur,
    initialMonth,
    weekStartDay = 'Sunday',
    selectedDate,
    disabled,
    datePickerPosition,
    ...rest
  } = props;

  const [datePickerOpen, setDatePickerOpen] = React.useState(false);
  const [inputVal, setInputVal] = React.useState(
    selectedDate ? utils.getMaskedDateString(selectedDate) : value
  );
  const [chosenDate, setChosenDate] = React.useState<Date | null>(
    utils.getDateFromString(value)
  );

  React.useEffect(() => {
    setInputVal(value);
    setChosenDate(utils.getDateFromString(value));
  }, [value]);

  React.useEffect(() => {
    setChosenDate(selectedDate || null);
    if (utils.isValidDateInstance(selectedDate)) {
      setInputVal(utils.getMaskedDateString(selectedDate));
    }
  }, [selectedDate]);

  const textboxRef = React.createRef<HTMLInputElement>();

  const handleDatePickerChange = (selectedDates: Date[]) => {
    const date = selectedDates[0];
    const maskedDate = utils.getMaskedDateString(date);

    setInputVal(maskedDate);
    setChosenDate(date);
    setDatePickerOpen(false);

    if (textboxRef.current) {
      utils.fireInputChange(textboxRef.current, maskedDate);
      textboxRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const dateValue = utils.getDateFromString(value);

    setChosenDate(dateValue);
    setInputVal(value);

    onChange &&
      onChange(e, utils.getCleanString(value), dateValue || undefined);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setDatePickerOpen(false);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDatePickerOpen(false);
    onBlur && onBlur(e);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setDatePickerOpen(false)}>
      <Box sx={styles.dateInputCss(props)}>
        <ReactInputMask
          mask={utils.inputMask}
          maskChar={utils.maskChar}
          formatChars={{ D: '[0-9]', M: '[0-9]', Y: '[0-9]' }}
          value={inputVal}
          onChange={handleChange}
          onPaste={onPaste}
          onMouseDown={onMouseDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        >
          {(inputProps: any) => (
            <Textbox
              disabled={disabled}
              {...rest}
              {...inputProps}
              ref={textboxRef}
              addon={
                <Icon
                  onClick={
                    () => !disabled && setDatePickerOpen(!datePickerOpen)
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                  name="date_range"
                  color="b-200"
                />
              }
              placeholder={utils.inputMask}
            />
          )}
        </ReactInputMask>
        {datePickerOpen && (
          <Box sx={styles.datePickerWrapper(datePickerPosition === 'right')}>
            <DatePicker
              initialMonth={initialMonth}
              onChange={handleDatePickerChange}
              mode="single"
              selectedDates={chosenDate ? [chosenDate] : undefined}
              weekStartDay={weekStartDay}
            />
          </Box>
        )}
      </Box>
    </OutsideClickHandler>
  );
};

export default DateInput;
