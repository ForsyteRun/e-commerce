import { Field } from 'formik';
import s from './select.module.scss';
import { END_DAYS, END_YEAR, START_DAYS, START_YEAR } from '../../constants';

const getDays = (startDays: number, endDays: number): number[] => {
  const days: number[] = [];

  for (let i = startDays; i <= endDays; i += 1) {
    days.push(i);
  }

  return days;
};

const getMonths = (): string[] => {
  return [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
};

const getYears = (startYear: number, endYear: number) => {
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year += 1) {
    years.push(year);
  }

  return years;
};

function Select() {
  const daysArray = getDays(START_DAYS, END_DAYS);
  const yearsArray = getYears(START_YEAR, END_YEAR);
  const monthsArray = getMonths();

  return (
    <>
      <div className={s.select__title}>Date of Birth</div>
      <div className={s.select__container}>
        <Field
          as="select"
          name="date"
          onChange={(e: string) => console.log(e)}
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
