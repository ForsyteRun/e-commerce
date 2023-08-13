import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode, useEffect } from 'react';
import {
  AVAILABLE_AGE,
  END_DAYS,
  END_YEAR,
  START_DAYS,
  START_YEAR,
  allMonths,
} from '../../constants';
import { IS_LEAP_YEAR, MIDDLE_OF_THE_YEAR, setLeapYear } from './constants';
import { getClick, getDays, getYears } from './helpers';
import checkLeapYear from './helpers/checkLeapYear';
import s from './select.module.scss';

let daysArray: number[];

function Select(): JSX.Element {
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

  const getDaysOfMonth = (value: string): void => {
    const index = allMonths.indexOf(value);
    let daysToRemove = 0;

    if (index === 1) {
      daysToRemove = IS_LEAP_YEAR ? 2 : 3;
    } else if ((index + 1) % 2 !== 0) {
      daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 0 : 1;
    } else {
      daysToRemove = index + 1 <= MIDDLE_OF_THE_YEAR ? 1 : 0;
    }

    daysArray = days.slice(0, days.length - daysToRemove);
  };

  useEffect(() => {
    getDaysOfMonth(month);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

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
          {(daysArray || days).map((day: number) => (
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
            getDaysOfMonth(e.target.value);
          }}
          className={s.select}
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
          className={s.select}
        >
          {yearsArray.map((value: number) => (
            <option value={value} key={value}>
              {value}
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
