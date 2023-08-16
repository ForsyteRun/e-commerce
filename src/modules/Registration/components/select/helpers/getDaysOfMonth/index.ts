import { allMonths } from '../../../../constants';
import { MIDDLE_OF_THE_YEAR } from '../../constants';

const getDaysOfMonth = (
  days: number[],
  value: string,
  leapYear: boolean
): number[] => {
  const index = allMonths.indexOf(value);
  let daysToRemove = 0;
  if (index === 1) {
    daysToRemove = leapYear ? 2 : 3;
  } else if ((index + 1) % 2 !== 0) {
    daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 0 : 1;
  } else {
    daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 1 : 0;
  }

  // console.log(days.slice(0, days.length - daysToRemove), value);

  return days.slice(0, days.length - daysToRemove);
};
export default getDaysOfMonth;
