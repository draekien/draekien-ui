import * as utils from '../datepicker.utils';

const dates = [
  new Date(2020, 5, 1),
  new Date(2020, 1, 1),
  new Date(2020, 2, 1),
  new Date(2020, 12, 1),
];

describe('DatePicker util', () => {
  test('getDaysOfWeek should return days of week in correct order when start day is Monday', () => {
    const daysOfWeek = utils.getDaysOfWeek('Monday');

    expect(daysOfWeek[0]).toEqual({ longLabel: 'Monday', shortLabel: 'M' });
    expect(daysOfWeek).toMatchSnapshot();
  });

  test('getDaysOfWeek should return days of week in correct order when start day is Sunday', () => {
    const daysOfWeek = utils.getDaysOfWeek('Sunday');

    expect(daysOfWeek[0]).toEqual({ longLabel: 'Sunday', shortLabel: 'S' });
    expect(daysOfWeek).toMatchSnapshot();
  });

  test('sortDates should sort dates from smallest to largest', () => {
    const sortedDates = utils.sortDates(dates);

    expect(sortedDates[0]).toEqual(new Date(2020, 1, 1));
    expect(sortedDates[1]).toEqual(new Date(2020, 2, 1));
    expect(sortedDates[2]).toEqual(new Date(2020, 5, 1));
    expect(sortedDates[3]).toEqual(new Date(2020, 12, 1));
  });

  test('getLatestDate should return the largest date', () => {
    const largestDate = utils.getLatestDate(dates);

    expect(largestDate).toEqual(new Date(2020, 12, 1));
  });

  test('addOrRemoveSelectedDate should add date when date does not exist', () => {
    const newDates = utils.addOrRemoveSelectedDate(new Date(2020, 1, 2), dates);

    expect(newDates).toContainEqual(new Date(2020, 1, 2));
  });

  test('addOrRemoveSelectedDate should remove date when date exists', () => {
    const newDates = utils.addOrRemoveSelectedDate(new Date(2020, 1, 1), dates);

    expect(newDates).not.toContainEqual(new Date(2020, 1, 1));
  });

  test('clearHours should set hours to midnight', () => {
    const date = utils.clearHours(new Date(2020, 1, 1, 20));

    expect(date).toEqual(new Date(2020, 1, 1));
  });

  test('clearHoursArray should set all dates to midnight', () => {
    const clearedDates = utils.clearHoursArray([
      new Date(2020, 1, 1, 20),
      new Date(2020, 2, 1, 20),
      new Date(2020, 3, 1, 20),
    ]);

    clearedDates.forEach((date) => {
      expect(date.getHours()).toEqual(0);
    });
  });

  test('substractMonth should substract month', () => {
    const expectedDate = new Date(2020, 3, 1);
    const date = utils.subtractMonth(new Date(2020, 4, 1));

    expect(date).toEqual(expectedDate);
  });

  test('addMonth should add month', () => {
    const expectedDate = new Date(2020, 3, 1);
    const date = utils.addMonth(new Date(2020, 2, 1));

    expect(date).toEqual(expectedDate);
  });

  test('getMonthLabel should return friendly month and year', () => {
    const expectedLabel = 'February 2020';
    const label = utils.getMonthLabel(new Date(2020, 1, 1));

    expect(label).toEqual(expectedLabel);
  });

  test('getFirstDateOfMonth should return first date of month', () => {
    const expectedDate = new Date(2020, 1, 1);
    const date = utils.getFirstDateOfMonth(new Date(2020, 1, 24));

    expect(date).toEqual(expectedDate);
  });

  test('getLastDateOfMonth should return last date of month', () => {
    const expectedDate = new Date(2020, 0, 31);
    const date = utils.getLastDateOfMonth(new Date(2020, 0, 15));

    expect(date).toEqual(expectedDate);
  });

  test('getFirstDayOfMonth should return first day of month when week start day is Sunday', () => {
    const expectedDay = new Date(2020, 0, 1).getDay();
    const day = utils.getFirstDayOfMonth(new Date(2020, 0, 14), 'Sunday');

    expect(day).toEqual(expectedDay);
  });

  test('getFirstDayOfMonth should return first day of month when week start day is Monday', () => {
    const expectedDay = new Date(2020, 0, 1).getDay() - 1;
    const day = utils.getFirstDayOfMonth(new Date(2020, 0, 14), 'Monday');

    expect(day).toEqual(expectedDay);
  });

  test('getLastDayOfMonth should return last day of month when week start day is Sunday', () => {
    const expectedDay = new Date(2020, 0, 31).getDay();
    const day = utils.getLastDayOfMonth(new Date(2020, 0, 14), 'Sunday');

    expect(day).toEqual(expectedDay);
  });

  test('getLastDayOfMonth should return last day of month when week start day is Monday', () => {
    const expectedDay = new Date(2020, 0, 31).getDay() - 1;
    const day = utils.getLastDayOfMonth(new Date(2020, 0, 14), 'Monday');

    expect(day).toEqual(expectedDay);
  });

  test('getDaysOfMonth should match snapshot when week start day is Monday', () => {
    const days = utils.getDaysOfMonth(new Date(2020, 0, 12), 'Monday');

    expect(days).toMatchSnapshot();
  });

  test('getDaysOfMonth should match snapshot when week start day is Sunday', () => {
    const days = utils.getDaysOfMonth(new Date(2020, 0, 12), 'Sunday');

    expect(days).toMatchSnapshot();
  });

  test('isSelected should return true if date is within selected dates', () => {
    const isSelected = utils.isSelected(new Date(2020, 1, 1), dates);

    expect(isSelected).toBeTruthy();
  });

  test('isSelected should return false if date is not in selected dates', () => {
    const isSelected = utils.isSelected(new Date(2020, 3, 1), dates);

    expect(isSelected).toBeFalsy();
  });

  test('isWithinSelectedRange should return true when date is within selected range', () => {
    const range = [new Date(2020, 0, 1), new Date(2020, 1, 1)];
    const date = new Date(2020, 0, 15);
    const isWithinSelectedRange = utils.isWithinSelectedRange(date, range);

    expect(isWithinSelectedRange).toBeTruthy();
  });

  test('isWithinSelectedRange should return false when date is outside selected range', () => {
    const range = [new Date(2020, 0, 1), new Date(2020, 1, 1)];
    const date = new Date(2020, 1, 15);
    const isWithinSelectedRange = utils.isWithinSelectedRange(date, range);

    expect(isWithinSelectedRange).toBeFalsy();
  });

  test('isWithinHoverRange should return true when date is within selected date and hovered date', () => {
    const range = [new Date(2020, 0, 1)];
    const date = new Date(2020, 0, 15);
    const hovered = new Date(2020, 1, 1);

    const isWithinHoverRange = utils.isWithinHoverRange(date, range, hovered);

    expect(isWithinHoverRange).toBeTruthy();
  });

  test('isWithinHoverRange should return false when date is outside selected date and hovered date', () => {
    const range = [new Date(2020, 0, 1)];
    const date = new Date(2020, 1, 15);
    const hovered = new Date(2020, 1, 1);

    const isWithinHoverRange = utils.isWithinHoverRange(date, range, hovered);

    expect(isWithinHoverRange).toBeFalsy();
  });

  test('isWithinHoverRange should return false when hovered date is undefined', () => {
    const range = [new Date(2020, 0, 1)];
    const date = new Date(2020, 1, 15);

    const isWithinHoverRange = utils.isWithinHoverRange(date, range);

    expect(isWithinHoverRange).toBeFalsy();
  });

  test('isDisabled should return correct result when date falls outside minmax date range', () => {
    const minDate = new Date(2020, 1, 1);
    const maxDate = new Date(2020, 1, 10);

    expect(
      utils.isDisabled(new Date(2020, 0, 1, 10), minDate, maxDate)
    ).toBeTruthy();
    expect(
      utils.isDisabled(new Date(2020, 1, 15, 15), minDate, maxDate)
    ).toBeTruthy();
    expect(utils.isDisabled(new Date(2020, 0, 1, 10), minDate)).toBeTruthy();
    expect(utils.isDisabled(new Date(2020, 1, 15, 15), minDate)).toBeFalsy();
    expect(
      utils.isDisabled(new Date(2020, 0, 1, 10), undefined, maxDate)
    ).toBeFalsy();
    expect(
      utils.isDisabled(new Date(2020, 1, 15, 15), undefined, maxDate)
    ).toBeTruthy();
  });

  test('isDisabled should return false when date falls inside minmax date range', () => {
    const minDate = new Date(2020, 1, 1);
    const maxDate = new Date(2020, 1, 10);

    expect(
      utils.isDisabled(new Date(2020, 1, 2, 10), minDate, maxDate)
    ).toBeFalsy();
  });

  test('isDisabled should return false when minmax date is undefined', () => {
    expect(utils.isDisabled(new Date(2020, 1, 2, 10))).toBeFalsy();
  });

  test('getDateStrings returns date string', () => {
    expect(utils.getDateStrings()).toEqual('');
    expect(utils.getDateStrings(dates)).toMatchSnapshot();
  });
});
