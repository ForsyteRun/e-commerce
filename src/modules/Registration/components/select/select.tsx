/* eslint-disable react-hooks/exhaustive-deps */
import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode, useEffect, useState } from 'react';
import {
  AVAILABLE_AGE,
  END_DAYS,
  END_YEAR,
  START_DAYS,
  START_YEAR,
  allMonths,
} from '../../constants';
import { getClick, getDays, getYears } from './helpers';
import { INIT_MONTH } from './constants';
import checkLeapYear from './helpers/checkLeapYear';
import getDaysOfMonth from './helpers/getDaysOfMonth';
import styles from './select.module.scss';
import convertDataToDateOfBirth from './helpers/convertDataToDateOfBirth';

function Select(): JSX.Element {
  const days = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  const [newDays, setNewDays] = useState<number[]>(days);

  const [dayOfBirthDay, setDayOfBirthDay] = useState<string>('');
  const [yearOfBirthDay, setYearOfBirthDay] = useState<string>('');
  const [monthOfBirthDay, setMonthOfBirthDay] = useState<string>(INIT_MONTH);

  const [chackLeapYear, setChackLeapYear] = useState<boolean>(false);

  const formikProps = useFormikContext<FormikValues>();

  // // TODO:how export formikProps?
  const validateYear = (value: number): string | undefined => {
    let error;

    const splitDateOfBirth = value.toString().split('-');

    const isLeapYear = checkLeapYear(Number(+splitDateOfBirth[0]));
    setChackLeapYear(isLeapYear);

    if (Number(splitDateOfBirth) > AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('dateOfBirth', error);
    }

    return error;
  };

  useEffect(() => {
    setNewDays(getDaysOfMonth(days, monthOfBirthDay, chackLeapYear));

    const data = { dayOfBirthDay, monthOfBirthDay, yearOfBirthDay };
    const getDateOfBirth = convertDataToDateOfBirth(data);

    formikProps.setFieldValue('dateOfBirth', getDateOfBirth);
  }, [dayOfBirthDay, monthOfBirthDay, yearOfBirthDay, chackLeapYear]);

  return (
    <div className={styles.select__container}>
      <div className={styles.select__title}>Date of Birth</div>
      <div className={styles.select__options}>
        <Field
          as="select"
          name="date"
          value={dayOfBirthDay}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDayOfBirthDay(e.target.value)
          }
          className={styles.select}
        >
          {newDays.map((day: number) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          name="month"
          value={monthOfBirthDay}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setMonthOfBirthDay(e.target.value);
          }}
          className={styles.select}
        >
          {allMonths.map((value: string) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          name="dateOfBirth"
          value={yearOfBirthDay}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setYearOfBirthDay(e.target.value);
            getClick();
          }}
          validate={validateYear}
          className={styles.select}
        >
          {yearsArray.map((value: number) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Field>
      </div>
      {formikProps.errors.dateOfBirth && (
        <div className={styles.errorValid}>
          {formikProps.errors.dateOfBirth as ReactNode}
        </div>
      )}
    </div>
  );
}

export default Select;
