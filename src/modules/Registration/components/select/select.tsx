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
// import { setLeapYear } from './constants';
import { getClick, getDays, getYears } from './helpers';
// import checkLeapYear from './helpers/checkLeapYear';
import getDaysOfMonth from './helpers/getDaysOfMonth';
import styles from './select.module.scss';
import checkLeapYear from './helpers/checkLeapYear';
import { setLeapYear } from './constants';

function Select(): JSX.Element {
  const days = getDays<number>(START_DAYS, END_DAYS);

  const [newDays, setNewDays] = useState<number[]>(days);
  const [yearOfBirthDay, setYearOfBirthDay] = useState<string>('');
  const [monthOfBirthDay, setMonthOfBirthDay] = useState<string>('');

  const formikProps = useFormikContext<FormikValues>();
  const { dateOfBirth } = formikProps.values;

  // eslint-disable-next-line no-console
  console.log(dateOfBirth);

  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  // // TODO:how export formikProps?
  const validateYear = (value: number): string | undefined => {
    let error;

    const splitDateOfBirth = value.toString().split('-');

    const isLeapYear = checkLeapYear(Number(+splitDateOfBirth[0]));
    setLeapYear(isLeapYear);

    if (Number(splitDateOfBirth) > AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('firstName', error);
    }

    return error;
  };

  useEffect(() => {
    setNewDays(getDaysOfMonth(days, monthOfBirthDay));

    formikProps.setFieldValue('dateOfBirth', yearOfBirthDay);
  }, [monthOfBirthDay, yearOfBirthDay]);

  return (
    <div className={styles.select__container}>
      <div className={styles.select__title}>Date of Birth</div>
      <div className={styles.select__options}>
        <Field
          as="select"
          name="date"
          onChange={
            // eslint-disable-next-line no-console
            (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e)
            // formikProps.setFieldValue('date', e.target.value)
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setMonthOfBirthDay(e.target.value);
            // formikProps.setFieldValue('month', e.target.value);
            // changeDaysOfMonth(e.target.value);
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setYearOfBirthDay(e.target.value);
            // formikProps.setFieldValue('year', e.target.value);
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
