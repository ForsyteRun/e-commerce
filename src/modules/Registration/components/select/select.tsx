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
import { getClick, getDays, getYears } from './helpers';
import s from './select.module.scss';

function Select(): JSX.Element {
  const formikProps = useFormikContext<FormikValues>();

  const daysArray = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  // TODO: scss to REM & mixins
  // TODO: dry
  // TODO: s -> styles
  // TODO: remove BEM
  // TODO: remove /* eslint-disable jsx-a11y/label-has-associated-control */ in registr
  const changeDate = (value: string) => {
    formikProps.setFieldValue('date', value);
  };
  const changeMonth = (value: string) => {
    formikProps.setFieldValue('month', value);
  };
  const changeYear = (value: string) => {
    formikProps.setFieldValue('year', value);
    getClick();
  };

  const validateYear = (year: number): string | undefined => {
    let error;
    if (year < AVAILABLE_AGE) {
      error = 'You are too young';
      formikProps.setFieldError('year', error);
    }

    return error;
  };

  return (
    <div className={s.select__container}>
      <div className={s.select__title}>Date of Birth</div>
      <div className={s.select__options}>
        <Field
          as="select"
          name="date"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            changeDate(e.target.value)
          }
          className={s.select}
        >
          {daysArray.map((day: number) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          name="month"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            changeMonth(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            changeYear(e.target.value)
          }
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
