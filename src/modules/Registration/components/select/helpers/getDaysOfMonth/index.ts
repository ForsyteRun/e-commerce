import { allMonths } from '../../../../constants';
import { IS_LEAP_YEAR, MIDDLE_OF_THE_YEAR } from '../../constants';

const getDaysOfMonth = (days: number[], value = 'January'): number[] => {
  const index = allMonths.indexOf(value);
  let daysToRemove = 0;

  if (index === 1) {
    daysToRemove = IS_LEAP_YEAR ? 2 : 3;
  } else if ((index + 1) % 2 !== 0) {
    daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 0 : 1;
  } else {
    daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 1 : 0;
  }

  // console.log(days.slice(0, days.length - daysToRemove), value);

  return days.slice(0, days.length - daysToRemove);
};
export default getDaysOfMonth;
