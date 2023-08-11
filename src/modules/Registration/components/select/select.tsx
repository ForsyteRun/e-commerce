import { Field, useFormikContext } from 'formik';
import {
  END_DAYS,
  END_YEAR,
  START_DAYS,
  START_YEAR,
  allMonths,
} from '../../constants';
import { getDays, getYears } from './helpers';
import s from './select.module.scss';

function Select() {
  const formikProps = useFormikContext();

  const daysArray = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);

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
  };

  return (
    <>
      <div className={s.select__title}>Date of Birth</div>
      <div className={s.select__container}>
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
          className={s.select}
        >
          {yearsArray.map((year: number) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </Field>
      </div>
    </>
  );
}

export default Select;
