export const START_DAYS = 1;
// eslint-disable-next-line import/no-mutable-exports
export let END_DAYS = 31;
export const START_YEAR = 1905;
export const END_YEAR = 2023;
export const AVAILABLE_AGE = 2010;

export const setEndDaysByFebruary = (days: number) => {
  END_DAYS = -days;
};

export const allMonths = [
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

export const validCountries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Brazil',
  'China',
  'India',
];
