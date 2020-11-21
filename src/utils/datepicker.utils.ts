import { WeekStartDay } from '../components/datepicker';

/**
 * Get the days of the week
 * @param weekStartDay which day to start the week with
 */
export const getDaysOfWeek = (weekStartDay: WeekStartDay) => {
  let daysOfWeek = [
    { longLabel: 'Monday', shortLabel: 'M' },
    { longLabel: 'Tuesday', shortLabel: 'T' },
    { longLabel: 'Wednesday', shortLabel: 'W' },
    { longLabel: 'Thursday', shortLabel: 'T' },
    { longLabel: 'Friday', shortLabel: 'F' },
    { longLabel: 'Saturday', shortLabel: 'S' },
  ];
  const sunday = { longLabel: 'Sunday', shortLabel: 'S' };
  if (weekStartDay === 'Sunday') daysOfWeek = [sunday, ...daysOfWeek];
  else daysOfWeek.push(sunday);
  return daysOfWeek;
};

/**
 * Array of the months of the year
 */
export const MONTHS_OF_YEAR = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Sorts an array of dates from smallest to largest
 * @param dates array of dates to sort
 */
export const sortDates = (dates: Date[]) => {
  const newDates = [...dates];
  return newDates.sort((a, b) => a.getTime() - b.getTime());
};

/**
 * Sorts an array of dates from smallest to largest and returns the largest date
 * @param dates array of dates to sort
 */
export const getLatestDate = (dates: Date[]) => {
  const newDates = [...dates];
  return sortDates(newDates)[newDates.length - 1];
};

/**
 * Adds a date to an array if it does not exist, or removes it if it does
 * @param date date to add or remove
 * @param dates existing array of dates
 * @returns the new array sorted from smallest to largest date
 */
export const addOrRemoveSelectedDate = (date: Date, dates: Date[]) => {
  const newDates = [...dates];
  const index = newDates.findIndex((newDate) => +newDate === +date);
  if (index > -1) newDates.splice(index, 1);
  else newDates.push(date);
  return sortDates(newDates);
};

/**
 * Sets the hours of an array of dates to midnight
 * @param dates array of dates
 */
export const clearHoursArray = (dates: Date[]) => {
  const newDates: Date[] = [];
  dates.forEach((date) => newDates.push(clearHours(date)));
  return newDates;
};

/**
 * Sets the hours of a date to midnight
 * @param date
 */
export const clearHours = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

/**
 * Sets the month of a date to the previous month
 * @param date
 */
export const subtractMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
};

/**
 * Sets the month of a date to the next month
 * @param date
 */
export const addMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + 1);
  return newDate;
};

/**
 * Gets a month-year label for a provided date
 * @param date
 */
export const getMonthLabel = (date: Date) => {
  return `${MONTHS_OF_YEAR[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Gets the first date of the month for a given date
 * @param date
 */
export const getFirstDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

/**
 * Gets the last date of the month for a given date
 * @param date
 */
export const getLastDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * Gets the first day of the month for a given date
 * @param date
 * @param weekStartDay what day the week starts on
 */
export const getFirstDayOfMonth = (date: Date, weekStartDay: WeekStartDay) => {
  let firstDayOfMonth = getFirstDateOfMonth(date).getDay();
  if (weekStartDay === 'Monday') firstDayOfMonth -= 1;
  if (firstDayOfMonth === -1) firstDayOfMonth = 6;
  return firstDayOfMonth;
};

/**
 * Gets the last day of the month for a given date
 * @param date
 * @param weekStartDay what day the week starts on
 */
export const getLastDayOfMonth = (date: Date, weekStartDay: WeekStartDay) => {
  let lastDayOfMonth = getLastDateOfMonth(date).getDay();
  if (weekStartDay === 'Monday') lastDayOfMonth -= 1;
  if (lastDayOfMonth === -1) lastDayOfMonth = 6;
  return lastDayOfMonth;
};

/**
 * Gets the dates to display in a calendar month, including previous and next months to fill in full weeks
 * @param date
 * @param weekStartDay what day the week starts on
 */
export const getDaysOfMonth = (date: Date, weekStartDay: WeekStartDay) => {
  const days = [];

  // Fill in the top row with the last few days of last month if required
  for (let i = getFirstDayOfMonth(date, weekStartDay); i > 0; i--) {
    const newDate = getFirstDateOfMonth(date);
    newDate.setDate(newDate.getDate() - i);
    days.push(clearHours(newDate));
  }

  // Fill in the month
  for (
    let i = getFirstDateOfMonth(date);
    i <= getLastDateOfMonth(date);
    i.setDate(i.getDate() + 1)
  ) {
    days.push(clearHours(new Date(i)));
  }

  // Fill in the bottom row with the first few days of next month if required
  for (let i = 1; i <= 6 - getLastDayOfMonth(date, weekStartDay); i++) {
    const newDate = getLastDateOfMonth(date);
    newDate.setDate(newDate.getDate() + i);
    days.push(clearHours(newDate));
  }

  return days;
};

/**
 * Checks if a date is a selected date
 * @param date
 * @param selectedDates
 */
export const isSelected = (date: Date, selectedDates: Date[]) =>
  selectedDates.some(
    (selectedDate) => selectedDate.toISOString() === date.toISOString()
  ) || false;

/**
 * Checks if a date falls within the range of two selected dates
 * @param date
 * @param selectedDates
 */
export const isWithinSelectedRange = (date: Date, selectedDates: Date[]) =>
  (selectedDates[0] &&
    date >= selectedDates[0] &&
    selectedDates[1] &&
    date <= selectedDates[1]) ||
  false;

/**
 * Checks if a date falls within the range of a selected date and a hovered date
 * @param date
 * @param selectedDates
 * @param hoveredDate
 */
export const isWithinHoverRange = (
  date: Date,
  selectedDates: Date[],
  hoveredDate?: Date
) => {
  if (selectedDates[0] && hoveredDate) {
    if (hoveredDate > selectedDates[0]) {
      return date >= selectedDates[0] && date <= hoveredDate;
    } else {
      return date >= hoveredDate && date <= selectedDates[0];
    }
  }
  return false;
};

/**
 * Checks if a date falls outside the min and max date range
 * @param date
 * @param minDate
 * @param maxDate
 */
export const isDisabled = (date: Date, minDate?: Date, maxDate?: Date) =>
  (minDate && date < clearHours(minDate)) ||
  (maxDate && date > clearHours(maxDate)) ||
  false;

export const getDateStrings = (dates?: Date[]) =>
  dates
    ? dates
        .map((d) => [d.getDate(), d.getMonth(), d.getFullYear()].join())
        .join()
    : '';
