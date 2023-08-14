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
import { setLeapYear } from './constants';
import { getClick, getDays, getYears } from './helpers';
import checkLeapYear from './helpers/checkLeapYear';
import getDaysOfMonth from './helpers/getDaysOfMonth';
import styles from './select.module.scss';

function Select(): JSX.Element {
  const [newDays, setNewDays] = useState<number[]>([]);

  const formikProps = useFormikContext<FormikValues>();
  const { month, year } = formikProps.values;

  const days = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  // TODO:how export formikProps?
  const validateYear = (value: number): string | undefined => {
    let error;

    const isLeapYear = checkLeapYear(Number(value));
    setLeapYear(isLeapYear);

    if (value > AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('year', error);
    }

    return error;
  };

  const changeDaysOfMonth = (value: string) => {
    setNewDays(getDaysOfMonth(value, days));
  };

  useEffect(() => {
    setNewDays(getDaysOfMonth(month, days));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  return (
    <div className={styles.select__container}>
      <div className={styles.select__title}>Date of Birth</div>
      <div className={styles.select__options}>
        <Field
          as="select"
          name="date"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            formikProps.setFieldValue('date', e.target.value)
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
            formikProps.setFieldValue('month', e.target.value);
            changeDaysOfMonth(e.target.value);
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
          name="year"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            formikProps.setFieldValue('year', e.target.value);
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
      {formikProps.errors.year && (
        <div className={styles.errorValid}>
          {formikProps.errors.year as ReactNode}
        </div>
      )}
    </div>
  );
}

export default Select;
