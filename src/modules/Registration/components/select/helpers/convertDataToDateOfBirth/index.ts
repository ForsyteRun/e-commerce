import { allMonths } from '../../../../constants';
import { ConvertDataToDateOfBirthType } from './types';

const convertDataToDateOfBirth = (data: ConvertDataToDateOfBirthType) => {
  const { day, month, year } = data;

  const getMonthIndex = allMonths.indexOf(month);

  return `${year}-${getMonthIndex + 1}-${day}`;
};

export default convertDataToDateOfBirth;
