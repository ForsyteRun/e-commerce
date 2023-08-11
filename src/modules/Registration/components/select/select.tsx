import { Field } from 'formik';
import { END_DAYS, END_YEAR, START_DAYS, START_YEAR } from '../../constants';
import s from './select.module.scss';
import { getDays, getMonths, getYears } from './helpers';

function Select() {
  const daysArray = getDays<number>(START_DAYS, END_DAYS);
  const yearsArray = getYears<number>(START_YEAR, END_YEAR);
  const monthsArray = getMonths();

  return (
    <>
      <div className={s.select__title}>Date of Birth</div>
      <div className={s.select__container}>
        <Field
          as="select"
          name="date"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
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
          onChange={(e: string) => console.log(e)}
          className={s.select}
        >
          {monthsArray.map((month: string) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          name="year"
          onChange={(e: string) => console.log(e)}
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
