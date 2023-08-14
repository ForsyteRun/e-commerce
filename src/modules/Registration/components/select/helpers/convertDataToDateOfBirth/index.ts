import { allMonths } from '../../../../constants';
import { ConvertDataToDateOfBirthType } from './types';

const convertDataToDateOfBirth = (data: ConvertDataToDateOfBirthType) => {
  const { dayOfBirthDay, monthOfBirthDay, yearOfBirthDay } = data;

  const getMonthIndex = allMonths.indexOf(monthOfBirthDay);

  return `${yearOfBirthDay}-${getMonthIndex + 1}-${dayOfBirthDay}`;
};

export default convertDataToDateOfBirth;
