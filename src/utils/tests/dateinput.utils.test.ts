import {
  getCleanString,
  getDateFromString,
  getMaskedDateString,
} from '../dateinput.utils';

describe('DateInput utils', () => {
  it('getCleanString returns the correct value when the date has been filled', () => {
    const val = '15 / 12 / 2020';
    expect(getCleanString(val)).toEqual('15/12/2020');
  });

  it('getCleanString returns the correct value when the date has not been filled', () => {
    const val = '-- / -- / ----';
    expect(getCleanString(val)).toEqual('');
  });

  it('getCleanString returns the correct value when the date has not been filled completely', () => {
    let val = '15 / 0- / ----';
    expect(getCleanString(val)).toEqual('15/0');
    val = '15 / -- / ----';
    expect(getCleanString(val)).toEqual('15');
    val = '15 / 04 / ----';
    expect(getCleanString(val)).toEqual('15/04');
    val = '15 / 04 / 19--';
    expect(getCleanString(val)).toEqual('15/04/19');
  });

  it('getDateFromString returns the correct date object when the date is filled', () => {
    const date = '15 / 03 / 1990';
    expect(getDateFromString(date)!.getDate()).toEqual(15);
    expect(getDateFromString(date)!.getMonth()).toEqual(2);
    expect(getDateFromString(date)!.getFullYear()).toEqual(1990);
  });

  it('getDateFromString returns null when the date is not filled', () => {
    const invalidDates = ['15 / 0- / 2019', '1- / 01 / 2019', '15 / 08 / 20-9'];
    invalidDates.forEach((date) => {
      expect(getDateFromString(date)).toBeNull();
    });
  });

  it('getMaskedDateString returns a masked date string based on a date', () => {
    const date = new Date(1990, 2, 23);
    expect(getMaskedDateString(date)).toEqual('23 / 03 / 1990');
  });
});
