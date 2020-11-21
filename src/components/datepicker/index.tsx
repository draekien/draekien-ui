/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import * as React from 'react';
import * as styles from './index.styles';
import * as utils from '../../utils/datepicker.utils';
import Button from '../button';
import Text from '../text';

export type WeekStartDay = 'Sunday' | 'Monday';

export type DatePickerProps = {
  selectedDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  initialMonth?: Date;
  onChange?: (selectedDates: Date[], selectedDate: Date) => void;
  onChangeMonth?: (activeMonth: Date) => void;
  mode?: 'range' | 'multi' | 'single';
  maxSelections?: number;
  weekStartDay?: WeekStartDay;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  minDate,
  maxDate,
  initialMonth,
  onChange,
  onChangeMonth,
  mode = 'single',
  maxSelections = 10,
  weekStartDay = 'Sunday',
  ...rest
}) => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(
    (rest.selectedDates &&
      utils.clearHoursArray(utils.sortDates(rest.selectedDates))) ||
      []
  );
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>(
    undefined
  );
  const [activeMonth, setActiveMonth] = React.useState<Date>(
    initialMonth ||
      (selectedDates.length && utils.getLatestDate(selectedDates)) ||
      new Date()
  );
  const [focusedDate, setFocusedDate] = React.useState<
    'start_date' | 'end_date'
  >('start_date');

  React.useEffect(() => {
    setSelectedDates(
      (rest.selectedDates &&
        utils.clearHoursArray(utils.sortDates(rest.selectedDates))) ||
        []
    );
    setActiveMonth(
      initialMonth ||
        (rest.selectedDates &&
          rest.selectedDates.length &&
          utils.getLatestDate(rest.selectedDates)) ||
        new Date()
    );

    if (
      mode === 'range' &&
      rest.selectedDates &&
      rest.selectedDates.length > 0
    ) {
      setFocusedDate(
        rest.selectedDates.length === 1 ? 'end_date' : 'start_date'
      );
    }
  }, [utils.getDateStrings(rest.selectedDates)]);

  const handleSelect = (date: Date) => {
    let dates;

    switch (mode) {
      case 'single':
        dates = selectedDates[0] === date ? [] : [date];
        break;
      case 'multi':
        dates = utils.addOrRemoveSelectedDate(date, selectedDates);
        break;
      case 'range':
        dates = selectedDates;

        if (focusedDate === 'start_date') {
          dates = [date];
          setFocusedDate('end_date');
        } else {
          dates = utils.sortDates([...dates, date]);
          setFocusedDate('start_date');
        }
        break;
    }

    setSelectedDates(dates);
    onChange && onChange(dates, date);
  };

  const handleOnChangeMonth = (activeMonth: Date) => {
    onChangeMonth && onChangeMonth(activeMonth);
  };

  const handleOnPrevMonth = () => {
    setActiveMonth(utils.subtractMonth(activeMonth));
    handleOnChangeMonth(utils.subtractMonth(activeMonth));
  };

  const handleOnNextMonth = () => {
    setActiveMonth(utils.addMonth(activeMonth));
    handleOnChangeMonth(utils.addMonth(activeMonth));
  };

  const Day = ({ date }: { date: Date }) => {
    const isSelected = utils.isSelected(date, selectedDates);

    const isWithinSelectedRange =
      mode === 'range' && utils.isWithinSelectedRange(date, selectedDates);

    const isWithinHoverRange =
      focusedDate === 'end_date' &&
      utils.isWithinHoverRange(date, selectedDates, hoveredDate);

    const isDisabled =
      (mode === 'multi' &&
        selectedDates.length === maxSelections &&
        !isSelected) ||
      utils.isDisabled(date, minDate, maxDate);

    const isAnotherMonth = date.getMonth() !== activeMonth.getMonth();

    const handleOnClickDay = () => {
      !isDisabled && handleSelect(date);

      if (isAnotherMonth && !isDisabled) {
        setActiveMonth(date);
        handleOnChangeMonth(date);
      }
    };

    return (
      <Box
        as="span"
        onClick={handleOnClickDay}
        onMouseEnter={() => {
          if (
            !isDisabled &&
            (!hoveredDate || date.toISOString() !== hoveredDate.toISOString())
          ) {
            setHoveredDate(date);
          }
        }}
        sx={styles.datePickerDayCss({
          isSelected,
          isWithinSelectedRange,
          isWithinHoverRange,
          isDisabled,
          isAnotherMonth,
        })}
      >
        {date.getDate()}
      </Box>
    );
  };

  return (
    <Box sx={styles.datePickerCss}>
      <Box sx={styles.datePickerHeaderCss}>
        <Button
          onClick={handleOnPrevMonth}
          icon="chevron_left"
          iconPosition="left"
          variant="text"
        />
        <Text as="span" sx={styles.datePickerLabelCss} variant="subtitle">
          {utils.getMonthLabel(activeMonth)}
        </Text>
        <Button
          onClick={handleOnNextMonth}
          icon="chevron_right"
          iconPosition="right"
          variant="text"
        />
      </Box>
      <Box sx={styles.datePickerWeekdayWrapperCss}>
        {utils.getDaysOfWeek(weekStartDay).map((day) => (
          <Text
            as="span"
            key={day.longLabel}
            sx={styles.datePickerWeekdayCss}
            variant="surtitle"
          >
            {day.shortLabel}
          </Text>
        ))}
      </Box>
      <Box sx={styles.datePickerDayWrapperCss}>
        {utils.getDaysOfMonth(activeMonth, weekStartDay).map((day, index) => (
          <Day date={day} key={`${day.toString()}-${index}`} />
        ))}
      </Box>
    </Box>
  );
};

export default DatePicker;
