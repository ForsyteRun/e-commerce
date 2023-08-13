import {
  ODER_LEAP_YEAR_FOUR,
  ODER_LEAP_YEAR_FOUR_HUNDRED,
  ODER_LEAP_YEAR_HUNDRED,
} from '../../constants';

const checkLeapYear = (value: number) => {
  const isLeapYear =
    (value % ODER_LEAP_YEAR_FOUR === 0 &&
      value % ODER_LEAP_YEAR_HUNDRED !== 0) ||
    value % ODER_LEAP_YEAR_FOUR_HUNDRED === 0;

  return isLeapYear;
};

export default checkLeapYear;
