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
import { INIT_DAY, INIT_MONTH, INIT_YEAR } from './constants';
import checkLeapYear from './helpers/checkLeapYear';
import getDaysOfMonth from './helpers/getDaysOfMonth';
import styles from './select.module.scss';
import convertDataToDateOfBirth from './helpers/convertDataToDateOfBirth';
import { DateOfBirth } from './types';

const Select = (): JSX.Element => {
  const days = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  const [newDays, setNewDays] = useState<number[]>(days);
  const [chackLeapYear, setChackLeapYear] = useState<boolean>(false);

  const [birthDay, setBirthDay] = useState<DateOfBirth>({
    day: INIT_DAY,
    month: INIT_MONTH,
    year: INIT_YEAR,
  });

  const { day, month, year } = birthDay;

  const formikProps = useFormikContext<FormikValues>();

  // // TODO:how export formikProps?
  const validateYear = (): string | undefined => {
    let error;

    const isLeapYear = checkLeapYear(Number(year));

    setChackLeapYear(isLeapYear);

    if (Number(year) > AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('dateOfBirth', error);
    }

    return error;
  };

  useEffect(() => {
    setNewDays(getDaysOfMonth(days, month, chackLeapYear));

    const data = { day, month, year };
    const getDateOfBirth = convertDataToDateOfBirth(data);

    formikProps.setFieldValue('dateOfBirth', getDateOfBirth);
  }, [day, month, year, chackLeapYear]);

  return (
    <div className={styles.select__container}>
      <div className={styles.select__title}>Date of Birth</div>
      <div className={styles.select__options}>
        <Field
          as="select"
          name="date"
          value={day}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setBirthDay({ ...birthDay, day: e.target.value })
          }
          className={styles.select}
        >
          {newDays.map((value: number) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          name="month"
          value={month}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setBirthDay({ ...birthDay, month: e.target.value });
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
          value={year}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setBirthDay({ ...birthDay, year: e.target.value });
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
};

export default Select;
