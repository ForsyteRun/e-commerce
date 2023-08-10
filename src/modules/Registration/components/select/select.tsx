import { Field } from 'formik';
import s from './select.module.scss';

function Select() {
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
          <option value="">1</option>
          <option value="">2</option>
        </Field>
        <Field
          as="select"
          name="month"
          onChange={(e: string) => console.log(e)}
          className={s.select}
        >
          <option value="">1</option>
          <option value="">2</option>
        </Field>
        <Field
          as="select"
          name="year"
          onChange={(e: string) => console.log(e)}
          className={s.select}
        >
          <option value="">1</option>
          <option value="">2</option>
        </Field>
      </div>
    </>
  );
}

export default Select;
