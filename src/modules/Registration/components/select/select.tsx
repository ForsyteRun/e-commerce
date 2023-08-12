import { Field, FormikValues, useFormikContext } from 'formik';
import { ReactNode, useEffect, useState } from 'react';
import {
  AVAILABLE_AGE,
  END_DAYS,
  END_YEAR,
  START_DAYS,
  START_YEAR,
  allMonths,
  setEndDaysByFebruary,
} from '../../constants';
import { getClick, getDays, getYears } from './helpers';
import s from './select.module.scss';
import {
  IS_LEAP_YEAR,
  MIDDLE_OF_THE_YEAR,
  ODER_LEAP_YEAR_FOUR,
  ODER_LEAP_YEAR_FOUR_HUNDRED,
  ODER_LEAP_YEAR_HUNDRED,
  setLeapYear,
} from './constants';

function Select(): JSX.Element {
  const formikProps = useFormikContext<FormikValues>();

  const [shortMonth, setShortMonth] = useState(false);
  // const [finishDays, setFinishDays] = useState<number[]>([]);
  // const [isLeapFebruary, setIsLeapFebruary] = useState(false);

  const days = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

  // useEffect(() => {
  //   const startIndex = 0;
  //   const endIndex = days.length - 1;

  //   const daysArray = days.slice(startIndex, endIndex);
  //   setFinishDays(daysArray);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [shortMonth]);
  // useEffect(() => {}, [isLeapFebruary]);
  // TODO: scss to REM & mixins
  // TODO: s -> styles
  // TODO: remove BEM
  // TODO: remove /* eslint-disable jsx-a11y/label-has-associated-control */ in registr
  // TODO: remove validateYear to another file
  // TODO: make Country as select
  // TODO: validate fn to separete files

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
    let isShortMonth = false;
    // const isLeapFebruary = false;

    const index = allMonths.indexOf(value);

    if (index === 1 && IS_LEAP_YEAR) {
      // setIsLeapFebruary(true);
      return;
      // setEndDaysByFebruary(3);
      // isLeapFebruary = true;
    }
    if (index === 1) {
      // setIsLeapFebruary(false);
      return;
      // setEndDaysByFebruary(2);
      // isLeapFebruary = false;
    }
    if (index + 1 > MIDDLE_OF_THE_YEAR) {
      isShortMonth = (index + 1) % 2 !== 0;
    } else {
      isShortMonth = (index + 1) % 2 === 0;
    }

    setShortMonth(isShortMonth);
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
          {days.map((day: number) =>
            shortMonth ? (
              <option value={+day - 1} key={day}>
                {+day - 1}
              </option>
            ) : (
              <option value={day} key={day}>
                {day}
              </option>
            )
          )}
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
