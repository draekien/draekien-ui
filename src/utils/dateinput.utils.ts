/** THe mask to be used for DateInput */
export const inputMask = 'DD / MM / YYYY';

/** the character used in the mask when the user has not filled the input in */
export const maskChar = '-';

/**
 * Gets a string in the format 'DD / MM / YYYY' from a date
 * @param date
 */
export const getMaskedDateString = (date?: Date) => {
  if (!date || typeof date.getTime !== 'function') return '';

  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day} / ${month} / ${date.getFullYear()}`;
};

/** Gets the string value representing the text the use has entered without the mask characters */
export const getCleanString = (value: string) => {
  if (!value || typeof value !== 'string') return '';
  return value.replace(/\s|-/g, '').replace(/^\/|\/$|\/\//g, '');
};

/** Tries to create a Date object based on a string in the format `DD / MM / YYYY`
 * If is not possible to parse the string value as a date, it will return null
 */
export const getDateFromString = (value?: string) => {
  if (!value || typeof value !== 'string') return null;
  const dateValues = getCleanString(value)
    .split('/')
    .filter((v) => v !== '' && v.length >= 'MM'.length);
  if (dateValues.length < 3) return null;
  if (dateValues[2].length < 4) return null;
  try {
    const numberValues = dateValues.map((v) => parseInt(v)); // [0] day, [1] month, [2] year
    return new Date(numberValues[2], numberValues[1] - 1, numberValues[0]);
  } catch (error) {
    return null;
  }
};

/** Fires the change event for an input element programmatically
 * https://stackoverflow.com/questions/42550341/react-trigger-onchange-if-input-value-is-changing-by-state/42554283
 */
export const fireInputChange = (element: HTMLInputElement, value: string) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    'value'
  )?.set;

  if (
    valueSetter &&
    prototypeValueSetter &&
    valueSetter !== prototypeValueSetter
  )
    prototypeValueSetter.call(element, value);
  else if (valueSetter) valueSetter.call(element, value);

  element.dispatchEvent(new Event('input', { bubbles: true }));
};

export const isValidDateInstance = (date?: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};
