/* eslint-disable import/no-mutable-exports */
export let IS_LEAP_YEAR = false;
// export let IS_SHORT_MONTH: boolean;
export const ODER_LEAP_YEAR_FOUR = 4;
export const ODER_LEAP_YEAR_HUNDRED = 100;
export const ODER_LEAP_YEAR_FOUR_HUNDRED = 100;

export const setLeapYear = (isLeap: boolean) => {
  IS_LEAP_YEAR = isLeap;
};

// export const setShortMonth = (isShort: boolean) => {
//   IS_SHORT_MONTH = isShort;
// };
