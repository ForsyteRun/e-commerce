import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import {
  AVAILABLE_AGE,
  END_DAYS,
  END_YEAR,
  START_DAYS,
  START_YEAR,
  allMonths,
} from '../../constants';
import {
  IS_LEAP_YEAR,
  MIDDLE_OF_THE_YEAR,
  ODER_LEAP_YEAR_FOUR,
  ODER_LEAP_YEAR_FOUR_HUNDRED,
  ODER_LEAP_YEAR_HUNDRED,
  setLeapYear,
} from './constants';
import { getClick, getDays, getYears } from './helpers';
import s from './select.module.scss';

let daysArray: number[];

function Select(): JSX.Element {
  const formikProps = useFormikContext<FormikValues>();

  const days = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  const validateYear = (year: number): string | undefined => {
    let error;

    if (
      (year % ODER_LEAP_YEAR_FOUR === 0 &&
        year % ODER_LEAP_YEAR_HUNDRED !== 0) ||
      year % ODER_LEAP_YEAR_FOUR_HUNDRED === 0
    ) {
      setLeapYear(true);
    }

    if (year > AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('year', error);
    }

    return error;
  };

  const getShortMonth = (value: string): void => {
    const index = allMonths.indexOf(value);

    do {
      if (index === 1 && IS_LEAP_YEAR) {
        daysArray = days.slice(0, days.length - 3);
        break;
      } else if (index === 1) {
        daysArray = days.slice(0, days.length - 2);
        break;
      } else if ((index + 1) % 2 !== 0) {
        if (index + 1 <= MIDDLE_OF_THE_YEAR) {
          daysArray = days.slice(0, days.length);
        } else {
          daysArray = days.slice(0, days.length - 1);
        }
        break;
      } else if ((index + 1) % 2 === 0) {
        if (index + 1 <= MIDDLE_OF_THE_YEAR) {
          daysArray = days.slice(0, days.length - 1);
        } else {
          daysArray = days.slice(0, days.length);
        }
        break;
      }
    } while (false);
  };

  return (
    <div className={s.select__container}>
      <div className={s.select__title}>Date of Birth</div>
      <div className={s.select__options}>
        <Field
          as="select"
          name="date"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            formikProps.setFieldValue('date', e.target.value)
          }
          className={s.select}
        >
          {daysArray
            ? daysArray.map((day: number) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))
            : days.map((day: number) => (
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
            getShortMonth(e.target.value);
          }}
          className={s.select}
        >
          {allMonths.map((month: string) => (
            <option value={month} key={month}>
              {month}
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
          className={s.select}
        >
          {yearsArray.map((year: number) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </Field>
      </div>
      {formikProps.errors.year && (
        <div className={s.errorValid}>
          {formikProps.errors.year as ReactNode}
        </div>
      )}
    </div>
  );
}

export default Select;
