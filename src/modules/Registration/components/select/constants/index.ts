// eslint-disable-next-line import/no-mutable-exports
export let IS_LEAP_YEAR = false;
export const MIDDLE_OF_THE_YEAR = 7;
export const ODER_LEAP_YEAR_FOUR = 4;
export const ODER_LEAP_YEAR_HUNDRED = 100;
export const ODER_LEAP_YEAR_FOUR_HUNDRED = 100;

// TODO:need redux?
export const setLeapYear = (isLeap: boolean): void => {
  IS_LEAP_YEAR = isLeap;
};
